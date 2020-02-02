import {Component, OnInit} from '@angular/core';
import {NerfumsService} from "../nerfums.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-user-login-menu',
  templateUrl: './user-login-menu.component.html',
  styleUrls: ['./user-login-menu.component.css']
})
export class UserLoginMenuComponent implements OnInit {

  private user: User;
  private isRegistering: boolean;

  constructor(private nerfumService: NerfumsService) {
  }

  ngOnInit() {
    this.user = this.nerfumService.currentUserValue;
    this.isRegistering = false;
  }

  public toggleRegister(isRegister: boolean) {
    this.isRegistering = isRegister;
  }
}
