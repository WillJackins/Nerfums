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
    Validators.required,
  ]);

  passwordControl = new FormControl('', [
    Validators.required
  ]);

  confirmPasswordControl = new FormControl('', [
    Validators.required
  ]);

  private currentAvatar: string;
  private sanitizedImageData: any;
  private hidePassword: boolean = true;
  private hideConfirmPassword: boolean = true;
  private userName: string = '';
  private password: string = '';
  private confirmPassword: string = '';
  private formData: FormData;

  constructor(private nerfumsService: NerfumsService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.formData = new FormData();
    this.currentAvatar = this.nerfumsService.getCurrentUserValue.userAvatarURL;
  }

  private onFileChanged(event) {
    //this.currentAvatar = this.sanitizer.sanitize(event.target.files[0], true);
    this.currentAvatar = event.target.files[0];
    console.log(this.currentAvatar);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.currentAvatar = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    let selectedFile = event.target.files[0];
    this.formData.append("file", selectedFile);
  }

  private changeAvatar() {
    this.nerfumsService.patchUserAvatar(this.formData).subscribe();
  }

  private setUsername(userName: string) {
    this.userName = userName;
  }

  private confirmUsernameClick() {
    if (!this.usernameControl.hasError('required'))
      this.nerfumsService.patchUsername(this.userName).subscribe();
  }

  private setPassword(password: string) {
    this.password = password;
  }

  private setConfirmPassword(confirmPassword: string) {
    this.confirmPassword = confirmPassword;

    if (this.password !== this.confirmPassword)
      this.confirmPasswordControl.setErrors({'match': true})
  }

  private confirmPasswordClick() {
    if (!this.passwordControl.hasError('required') && !this.confirmPasswordControl.hasError('match'))
      this.nerfumsService.patchUserPassword(this.password).subscribe();
  }


  private onHidePasswordClick() {
    this.hidePassword = !this.hidePassword;
  }

  private onHideConfirmPasswordClick() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }
}
