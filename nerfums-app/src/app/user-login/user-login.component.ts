import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  private user_name: string;
  private password:string;
  usernameControl = new FormControl('', [
    Validators.required
  ]);

  passwordControl = new FormControl('', [
    Validators.required
  ]);
  constructor() { }

  ngOnInit() {
  }

  setUserName(name: string){
    this.user_name = name;
    console.log(name);
  }

  setPassword(password: string) {
    this.password = password;
    console.log(password);
  }

}
