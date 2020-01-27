import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NerfumsService } from '../../nerfums.service';
import { stringify } from 'querystring';
import { User } from 'src/model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  submitted: Boolean = false;
  
  private

  private full_name: string = "";
  private email: string = "";
  private password: string = "";
  private confirmPassword: string = "";

  private validName: boolean = true;
  private validPassword: boolean = false;

  private hidePassword: boolean = true;
  private hideConfirmPassword: boolean = true;


  //todo - use a form, custom form validations
  fullnameControl = new FormControl('', [
    Validators.required
  ]);

  emailControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordControl = new FormControl('', [
    Validators.required
  ]);

  confirmPasswordControl = new FormControl('', [
    Validators.required
  ]);
  constructor(private nerfumsService: NerfumsService, private router: Router) { }

  ngOnInit() {
  }
  private MustMatch(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if(matchingControl.errors && matchingControl.errors.mustMatch) {
        return;
      }

      if(control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }

    }
  }

  private onSubmit() {
    // this.submitted = true;
    // if(this.registerUser.invalid) {
    //   console.log("invalid form");
    //   return;
    // }
  }

  private onHideConfirmPasswordClick(){
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  private onHidePasswordClick(){
    this.hidePassword = !this.hidePassword;
  }

  private onReset() {
    this.submitted = false;
  }
  private setFullName(full_name: string) {
    this.full_name = full_name;
    console.log(this.full_name);
  }

  private setEmail(email: string) {
    this.email = email;
    console.log(this.email);
  }

  private setPassword(password: string) {
    this.password = password;
    console.log(this.password);
  }

  private setConfirmPassword(confirmPassword: string){
    this.confirmPassword = confirmPassword;
    this.validPassword = this.confirmPassword === this.password;
    console.log(this.confirmPassword); console.log(this.validPassword);
  }

  private validateAllFields(): boolean {
    if(this.full_name === "" 
        || this.email === "" 
        || this.password === "" 
        || this.confirmPassword === "" 
        || this.confirmPassword !== this.password) {
      return false;
    }
    return true;
  }

  private register(){
    if(!this.validateAllFields()) {
      //todo error
      return;
    }

    //todo - AuthClass
    let user: User = {
       fullName: this.full_name,
       availableCash: 1000
    };
    //this.nerfumsService.postUser(user).subscribe(data => console.log(data));
  }

  private cancel() {
    this.router.navigate(['./loginPage']);
  }

  private validatePasswords(): boolean {
    return this.password.length > 6 && this.password === this.confirmPassword;
  }
}
