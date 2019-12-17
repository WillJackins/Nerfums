import {Component, DebugElement, OnInit} from '@angular/core';
import {NerfumsService} from '../nerfums.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  constructor(private nerfumsService: NerfumsService) { }

  static Contract = class {
    contractOwner: any;
    contractTarget: any;
    paymentAmount: any;
    requirements: Array<any>;
    optionals: Array<any>;
}
  users: Array<any>;
  modifiers: Array<any>;

  contract: any;

  targetInputControl = new FormControl('', [Validators.required]);
  rewardControl = new FormControl('', [Validators.required])

  ngOnInit() {
    this.nerfumsService.getAllUsers().subscribe(data => {
      this.users = data;
    });

    this.nerfumsService.getAllModifiers().subscribe(data => {
      this.modifiers = data;
    });

    this.contract = new ContractCreateComponent.Contract();
  }

  setReward(reward: any) {
    this.contract.paymentAmount = reward;
  }

  postContract() {
    this.nerfumsService.postContract(this.contract);
  }
}
