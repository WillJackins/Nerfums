import {Component, OnInit} from '@angular/core';
import {NerfumsService} from '../nerfums.service';
import {FormControl, Validators} from '@angular/forms';
import {Contract} from '../../model/Contract';
import {User} from '../../model/User';
import {Modifier} from '../../model/Modifier';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  constructor(private nerfumsService: NerfumsService, private dialogRef: MatDialogRef<ContractCreateComponent>) { }

  users: Array<User>;
  modifiers: Array<Modifier>;

  contract: Contract;

  targetInputControl = new FormControl('', [Validators.required]);
  rewardControl = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.nerfumsService.getAllUsers().subscribe(data => {
      this.users = data;
    });

    this.nerfumsService.getAllModifiers().subscribe(data => {
      this.modifiers = data;
    });

    this.contract = new Contract();
  }

  setTarget(target: any) {
    this.contract.contractTarget = target;
  }

  setReward(reward: any) {
    this.contract.contractReward = reward;
  }

  setRequirements(requirements: Array<any>) {
    this.contract.requirements = requirements;
  }

  setOptionals(optionals: Array<any>) {
    this.contract.optionals = optionals;
  }

  setDetails(details: string) {
    this.contract.contractDetails = details;
  }

  isValidContract(): boolean {

    // if (this.contract.contractOwner == null) {
    //   return false;
    // }
    if (this.contract.contractTarget == null) {
      return false;
    }
    if (this.contract.contractReward == null) {
      return false;
    }
    return true;
  }

  postContract() {

    if (this.isValidContract()) {
      this.contract.contractOwner = this.users[0];

      this.nerfumsService.postContract(this.contract).subscribe(data =>
        console.log(data));
      location.reload();
      this.closeDialog();
    } else {
      console.log('Invalid Contract');
    }
  }

  closeDialog() {
    this.contract = new Contract();
    this.dialogRef.close();
  }
}
