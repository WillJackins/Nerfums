import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NerfumsService} from '../../nerfums.service';
import {Router} from '@angular/router';
import {Register} from "../../../model/Register";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  private register: Register;
  private confirmPassword: string;

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
    this.initRegisterObject();
  }

  private MustMatch(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if(matchingControl.errors && matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }

    }
  }

  private initRegisterObject() {
    this.register = new class implements Register {
      displayName: string;
      password: string;
      username: string;
    };
  }

  private onHideConfirmPasswordClick() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  private onHidePasswordClick() {
    this.hidePassword = !this.hidePassword;
  }

  private setFullName(displayName: string) {
    console.log(displayName);
    this.register.displayName = displayName;
  }

  private setEmail(email: string) {
    this.register.username = email;
    console.log(email);
  }

  private setPassword(password: string) {
    this.register.password = password;
    console.log(password);
  }

  private setConfirmPassword(confirmPassword: string){
    this.confirmPassword = confirmPassword;
    console.log(this.confirmPassword); console.log(this.validPassword);
    //TODO log at this
  }

  private validateAllFields(): boolean {
    if (this.register.displayName === ""
      || this.register.username === ""
      || this.register.password === ""
      || this.confirmPassword === ""
      || this.confirmPassword !== this.register.password) {
      return false;
    }
    return true;
  }

  private registerUser() {
    if (!this.validateAllFields()) {
      return;
    }

    this.nerfumsService.register(this.register).subscribe();
  }

  private validatePasswords(): boolean {
    return this.register.password.length > 6 && this.register.password === this.confirmPassword;
  }
}
