import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  private user_name: string;
  private password:string;
  private hidePassword: boolean = true;
  usernameControl = new FormControl('', [
    Validators.required
  ]);

  passwordControl = new FormControl('', [
    Validators.required
  ]);
  constructor(private router: Router) { }

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
    console.log("todo login");
  }

  private register(){
    this.router.navigate(['./registerPage'])
    //use the router here i think
  }
}
