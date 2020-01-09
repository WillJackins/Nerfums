import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NerfumsService } from '../nerfums.service';
import { stringify } from 'querystring';
import { User } from 'src/model/User';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  submitted: Boolean = false;
  
  private full_name: String = "";
  private email: String = "";
  private password: String = "";
  private confirmPassword: String = "";

  private validName:Boolean = true;
  private validPassword: Boolean = false;

  private hidePassword:Boolean = true;
  private hideConfirmPassword:Boolean = true;

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
    Validators.required,
  ]);
  constructor(private nerfumsService: NerfumsService) { }

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
  private setFullName(full_name: String) {
    this.full_name = full_name;
    console.log(this.full_name);
  }

  private setEmail(email: String) {
    this.email = email;
    console.log(this.email);
  }

  private setPassword(password: String) {
    this.password = password;
    console.log(this.password);
  }

  private setConfirmPassword(confirmPassword: String){
    this.confirmPassword = confirmPassword;
    this.validPassword = this.confirmPassword === this.password;
    console.log(this.confirmPassword); console.log(this.validPassword);
  }

  private validateAllFields(): Boolean {
    if(this.full_name === "" || this.email === "" || this.password === "" || this.confirmPassword === "" || this.confirmPassword !== this.password) {
      return false;
    }
    console.log("valid");
    return true;
  }

  private register(){
    console.log("Register");
    if(this.validateAllFields()) {
      console.log("posting");
      let user: User = {
        fullName: this.full_name,
        availableCash: 1000
      };
      this.nerfumsService.postUser(user).subscribe(data => console.log(data));
    }
    if(this.password === this.confirmPassword) {

    }
    console.log("Register:" + this.password === this.confirmPassword);
  }

  private validatePasswords(): Boolean {
    return this.password.length > 6 && this.password === this.confirmPassword;
  }
}
