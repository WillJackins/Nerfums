import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from '../../model/User';
import {NerfumsService} from '../nerfums.service';
import {Contract} from '../../model/Contract';
import {FormControl, Validators} from '@angular/forms';
import {Modifier} from '../../model/Modifier';
import {MatListOption} from '@angular/material/list';

@Component({
  selector: 'app-contract-complete',
  templateUrl: './contract-complete.component.html',
  styleUrls: ['./contract-complete.component.css']
})
export class ContractCompleteComponent implements OnInit {
  contractToComplete: Contract;
  users: Array<User>;

  userInputControl = new FormControl('', [Validators.required]);

  constructor(private nerfumsService: NerfumsService, private dialogRef: MatDialogRef<ContractCompleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.contractToComplete = this.data.contract;
    console.log(this.contractToComplete);

    this.nerfumsService.getAllUsers().subscribe(result => {
      this.users = result;
    });
  }

  setCompleteBy(completeBy: User) {
    console.log("COMPLETED BY: " + completeBy.displayName);
    this.contractToComplete.contractCompletedBy = completeBy;
  }

  setCompletedOptionalFromSelectList(selected: Array<MatListOption>) {
    const modifiers: Array<Modifier> = new Array<Modifier>();

    for (const option of selected) {
      console.log(option);
      modifiers.push(option.value);
    }

    this.setCompletedOptionals(modifiers);
  }

  setCompletedOptionals(modifiers: Array<Modifier>) {
    console.log(modifiers);
    this.contractToComplete.contractCompletedOptionals = modifiers;
  }

  completeContract() {
    if (this.contractValid()) {
      this.nerfumsService.completeContract(this.contractToComplete).subscribe(result => {
        console.log(result);
        this.closeDialog();
      });
    }
  }

  closeDialog() {
    this.contractToComplete = null;
    this.dialogRef.close();
  }

  hasRequirements(): boolean {
    return this.contractToComplete.requirements !== undefined &&
      this.contractToComplete.requirements != null &&
      this.contractToComplete.requirements.length > 0;
  }

  hasOptionals(): boolean {
    return this.contractToComplete.optionals !== undefined &&
      this.contractToComplete.optionals != null &&
      this.contractToComplete.optionals.length > 0;
  }

  contractValid(): boolean {
    return this.contractToComplete.contractCompletedBy != null;
  }
}
