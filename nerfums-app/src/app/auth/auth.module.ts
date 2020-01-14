import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
@NgModule({
  declarations: [UserLoginComponent, RegisterUserComponent],
  imports: [
    CommonModule
  ],
  exports: [UserLoginComponent, RegisterUserComponent]
})
export class AuthModule { }
