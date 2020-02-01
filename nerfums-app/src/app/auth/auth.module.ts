import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserLoginComponent} from './user-login/user-login.component';
import {RegisterUserComponent} from './user-register/register-user.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [UserLoginComponent, RegisterUserComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [UserLoginComponent, RegisterUserComponent]
})
export class AuthModule { }
