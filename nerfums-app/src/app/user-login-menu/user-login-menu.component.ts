import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-login-menu',
  templateUrl: './user-login-menu.component.html',
  styleUrls: ['./user-login-menu.component.css']
})
export class UserLoginMenuComponent implements OnInit {

  private isRegistering: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isRegistering = false;
  }

  public toggleRegister(isRegister: boolean) {
    this.isRegistering = isRegister;
  }
}
