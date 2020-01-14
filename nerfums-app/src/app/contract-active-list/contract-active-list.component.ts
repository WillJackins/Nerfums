import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/Contract';
import {NerfumsService} from '../nerfums.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
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

    this.retrieveContractList();
  }

  private openCompleteDialog(contract: Contract) {
    const dialogRef = this.dialog.open(ContractCompleteComponent, {
      data: {contract}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.retrieveContractList();
    });
  }

  private openDeleteDialog(contractToDeleteId: number) {
    const dialogRef = this.dialog.open(ContractDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('DELETE CONTRACT: ' + result);

      if (result) {
        this.nerfumsService.deleteContractById(contractToDeleteId).subscribe(data => {
          this.retrieveContractList();
        });
      }
    });
  }

  private paginatorEvent(event?: PageEvent) {
    this.updateContractList(event.pageIndex, event.pageSize);
  }

  private retrieveContractList() {
    this.nerfumsService.getAllContractsByOwnerId(1, true).subscribe(data => {
      console.log('CONTRACT LIST RETRIEVED || COUNT: ' + data.length);
      this.allUserActiveContracts = data;
      this.updateContractList(this.defaultPageIndex, this.defaultPageSize);
    });
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

  constructor(public dialogRef: MatDialogRef<ContractDeleteDialogComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onDeleteClick() {
    this.dialogRef.close(true);
  }
}
