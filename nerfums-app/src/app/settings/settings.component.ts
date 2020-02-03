import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


  usernameControl = new FormControl('', [
    Validators.required
  ]);

  passwordControl = new FormControl('', [
    Validators.required
  ]);

  hidePassword: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  private setUsername(userName: string){
    //todo
  }

  private setPassword(password: string){
    //todo
  }

  private confirmUsername(){
    console.log('Confirm username');
  }

  private confirmPassword(){
    console.log('Confirm password');
  }

  private onHidePasswordClick(){
    this.hidePassword = !this.hidePassword;
  }

}
