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
      console.log("USERS: " + this.users.length);
    });

    this.nerfumsService.getAllModifiers().subscribe(data => {
      this.modifiers = data;
    });

    this.initContract();
  }

  initContract() {
    this.contract = new class implements Contract {
      contractActive: boolean;
      contractCompletedBy: User;
      contractCompletedOptionals: Array<Modifier>;
      contractDetails: string;
      contractId: number;
      contractOwner: User;
      contractReward: number;
      contractTarget: User;
      optionals: Array<Modifier>;
      requirements: Array<Modifier>;
    }
  }

  setTarget(target: User) {
    this.contract.contractTarget = target;
  }

  setReward(reward: number) {
    this.contract.contractReward = reward;
  }

  setRequirements(requirements: Array<Modifier>) {
    this.contract.requirements = requirements;
  }

  setOptionals(optionals: Array<Modifier>) {
    this.contract.optionals = optionals;
  }

  setDetails(details: string) {
    this.contract.contractDetails = details;
  }

  isValidContract(): boolean {
    return (this.contract.contractTarget != null) && (this.contract.contractReward != null && this.contract.contractReward > 0);
  }

  postContract() {

    if (this.isValidContract()) {
      this.contract.contractOwner = this.nerfumsService.currentUserValue;

      this.nerfumsService.postContract(this.contract).subscribe(data =>
        console.log(data));
      location.reload();
      this.closeDialog();
    } else {
      console.log('Invalid Contract');
    }
  }

  closeDialog() {
    this.initContract();
    this.dialogRef.close();
  }
}
