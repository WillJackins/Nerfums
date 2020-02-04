import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NerfumsService } from '../nerfums.service';
import { User } from '../../model/User';
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

  confirmPasswordControl = new FormControl('', [
    Validators.required
  ]);

  private avatar: string = 'assets/shiba1.jpg';
  private hidePassword: boolean = true;
  private hideConfirmPassword: boolean = true;
  private userName: string = '';
  private password: string = '';
  private confirmPassword: string ='';
  constructor(private nerfumsService: NerfumsService) {
  }

  ngOnInit() {
  }

  private setUsername(userName: string){
    this.userName = userName;
  }

  private setPassword(password: string){
    this.password = password;
  }

  private setConfirmPassword(confirmPassword: string){
    this.confirmPassword = confirmPassword;
  }

  private confirmUsernameClick(){
    console.log('todo Confirm username');
    this.nerfumsService.patchUsername();
  }

  private confirmPasswordClick(){
    console.log('todo Confirm password');
    if(this.password === this.confirmPassword){
      this.nerfumsService.patchUserPassword();
    }
    console.log('error passwords do not match');
  }

  private confirmPictureClick(){
    console.log('todo Confirm picture');
    this.nerfumsService.patchUserAvatar();
  }

  private uploadImageClick(){
    console.log('todo upload image');
  }

  private onHideConfirmPasswordClick() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  private onHidePasswordClick(){
    this.hidePassword = !this.hidePassword;
  }

  

}
