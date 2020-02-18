import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {NerfumsService} from '../nerfums.service'; 
import {DomSanitizer} from '@angular/platform-browser'
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

  private blob: Blob; //https://material.angular.io/assets/img/examples/shiba1.jpg
  private avatar: any;
  private sanitizedImageData: any;
  private hidePassword: boolean = true;
  private hideConfirmPassword: boolean = true;
  private userName: string = '';
  private password: string = '';
  private confirmPassword: string ='';
  private formData: FormData;
  constructor(private nerfumsService: NerfumsService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.formData = new FormData();
    this.nerfumsService.getUserAvatar().subscribe(data => {
      //let reader = new FileReader();
      //reader.onload = (event: any) => {
        //this.avatar = event.target.result;
        //console.log(this.avatar)
      //};
      //reader.readAsDataURL(new Blob([this.avatar]));
      this.avatar = 'data:image/png;base64,'+data;
      this.sanitizedImageData = this.sanitizer.bypassSecurityTrustUrl(this.avatar);
    });
    console.log(this.avatar);
  }

  private createImageFromBlob(image: Blob){
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.avatar = event.target.result;
    };
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
