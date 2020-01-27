import {Component, Inject, OnInit} from '@angular/core';
import {Contract} from '../../model/Contract';
import {NerfumsService} from '../nerfums.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {ContractCompleteComponent} from '../contract-complete/contract-complete.component';

@Component({
  selector: 'app-contract-active-list',
  templateUrl: './contract-active-list.component.html',
  styleUrls: ['./contract-active-list.component.css']
})
export class ContractActiveListComponent implements OnInit {
  displayColumns: string[] = ['index', 'contractTarget', 'contractReward', 'contractDetails', 'contractDelete', 'contractComplete'];

  allUserActiveContracts: Array<Contract>;
  currentUserActiveContracts: Array<Contract>;
  defaultPageIndex: number;
  defaultPageSize: number;

  constructor(private nerfumsService: NerfumsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.defaultPageIndex = 0;
    this.defaultPageSize = 5;
    this.allUserActiveContracts = new Array<Contract>();
    this.nerfumsService.getAllContractsByOwnerId(1).subscribe(data => {
      this.allUserActiveContracts = data;
      this.updateContractList(this.defaultPageIndex, this.defaultPageSize);
    });
  }

  openDeleteDialog(contractToDeleteId: number) {
    const dialogRef = this.dialog.open(ContractDeleteDialogComponent, {
      data: {contractToDeleteId}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log(result);
        this.nerfumsService.deleteContractById(result);
        location.reload();
      }
    });
  }

  openCompleteDialog(contract: Contract) {
    const dialogRef = this.dialog.open(ContractCompleteComponent, {
      data: {contract}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  private paginatorEvent(event?: PageEvent) {
    this.updateContractList(event.pageIndex, event.pageSize);
  }


  private updateContractList(pageIndex: number, pageSize: number) {
    this.currentUserActiveContracts = this.allUserActiveContracts.slice((pageIndex * pageSize), (pageIndex * pageSize) + pageSize);
  }
}

@Component({
  selector: 'app-contract-delete-dialog',
  templateUrl: 'contract-delete-dialog.html',
})
export class ContractDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ContractDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onDeleteClick() {
    this.dialogRef.close(this.data.contractToDeleteId);
  }
}
