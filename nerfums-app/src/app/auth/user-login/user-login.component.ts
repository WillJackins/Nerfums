import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserLoginMenuComponent} from "../../user-login-menu/user-login-menu.component";
import {NerfumsService} from "../../nerfums.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  private user_name: string;
  private password: string;
  private hidePassword: boolean = true;
  private loginFailed: boolean = false;
  private errorWobble: boolean = false;

  usernameControl = new FormControl('', [
    Validators.required,
  ]);

  passwordControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private nerfumsService: NerfumsService, private loginMenu: UserLoginMenuComponent) {
  }

  ngOnInit() {
  }

  private onHidePasswordClick(){
    this.hidePassword = !this.hidePassword;
  }

  private setUserName(name: string){
    this.user_name = name;
    console.log(name);
  }

  private setPassword(password: string) {
    this.password = password;
    console.log(password);
  }

  private login() {
    this.nerfumsService.login(this.user_name, this.password).subscribe(
      data => {
        this.resetLogin();
      },
      error => {
        this.handleError(error);
      }
    );
  }

  private openRegisterComponent() {
    this.loginMenu.toggleRegister(true);
  }

  private resetLogin() {
    this.user_name = null;
    this.password = null;

    this.hidePassword = true;
    this.loginFailed = false;
  }

  handleError(error: HttpErrorResponse) {
    if (error.status == 403) {
      console.log("Invalid");
      this.resetLogin();
      this.loginFailed = true;

      this.errorWobble = true;
      setTimeout((arg) => {
          this.errorWobble = false;
        },
        300);
    }
  }
}
