import {Component, OnInit} from '@angular/core';
import {NerfumsService} from "../nerfums.service";

@Component({
  selector: 'app-user-login-menu',
  templateUrl: './user-login-menu.component.html',
  styleUrls: ['./user-login-menu.component.css']
})
export class UserLoginMenuComponent implements OnInit {

  private isRegistering: boolean;

  constructor(private nerfumService: NerfumsService) {
  }

  ngOnInit() {
    this.isRegistering = false;
  }

  public toggleRegister(isRegister: boolean) {
    this.isRegistering = isRegister;
  }
}
