import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {NerfumsService} from '../nerfums.service';
import { Observable } from 'rxjs';

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

  private avatar: string = ''; //https://material.angular.io/assets/img/examples/shiba1.jpg
  private hidePassword: boolean = true;
  private hideConfirmPassword: boolean = true;
  private userName: string = '';
  private password: string = '';
  private confirmPassword: string ='';
  private formData: FormData;
  constructor(private nerfumsService: NerfumsService) {
  }

  ngOnInit() {
    this.formData = new FormData();
    this.nerfumsService.getUserAvatar('default-avatar.png').subscribe(data => {
      this.avatar = data;
    });
    console.log(this.avatar);
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
    //console.log(this.formData);
    console.log(this.nerfumsService.patchUserAvatar(this.formData).subscribe());
  }

  private uploadImageClick(){
    console.log('todo upload image');
  }

  private onHideConfirmPasswordClick() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  private onHidePasswordClick() {
    this.hidePassword = !this.hidePassword;
  }

  private onFileChanged(event) {
    this.avatar = event.target.files[0];
    console.log(this.avatar);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.avatar = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    let selectedFile = event.target.files[0];
    this.formData.append("file", selectedFile);
  }

}
