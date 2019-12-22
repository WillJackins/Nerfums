import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/Contract';
import {NerfumsService} from '../nerfums.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-contract-active-list',
  templateUrl: './contract-active-list.component.html',
  styleUrls: ['./contract-active-list.component.css']
})
export class ContractActiveListComponent implements OnInit {
  displayColumns: string[] = ['index', 'contractTarget', 'contractReward', 'contractDelete', 'contractComplete'];
  userActiveContracts: Array<Contract>;

  constructor(private nerfumsService: NerfumsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.nerfumsService.getAllContractsByOwnerId(1).subscribe(data => this.userActiveContracts = data);
  }

  openDeleteDialog() {
    this.dialog.open(ContractDeleteDialogComponent);
  }
}

@Component({
  selector: 'app-contract-delete-dialog',
  templateUrl: 'contract-delete-dialog.html',
})
export class ContractDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ContractDeleteDialogComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
