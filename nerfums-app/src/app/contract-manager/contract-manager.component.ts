import {Component, OnInit} from '@angular/core';
import {NerfumsService} from '../nerfums.service';
import {Contract} from '../../model/Contract';
import {ContractCreateComponent} from "../contract-create/contract-create.component";
import {MatDialog} from "@angular/material/dialog";
import {BehaviorSubject, Observable} from "rxjs";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {ContractCompleteComponent} from "../contract-complete/contract-complete.component";

@Component({
  selector: 'app-contract-manager',
  templateUrl: './contract-manager.component.html',
  styleUrls: ['./contract-manager.component.css']
})
export class ContractManagerComponent implements OnInit {

  constructor(private nerfumsService: NerfumsService, public dialog: MatDialog) {
  }

  private activeContractsSubject: BehaviorSubject<Array<Contract>>;
  private activeContracts: Observable<Array<Contract>>;

  ngOnInit() {
    this.activeContractsSubject = new BehaviorSubject<Array<Contract>>(new Array<Contract>());
    this.activeContracts = this.activeContractsSubject.asObservable();

    this.updateActiveContracts();
  }

  public getActiveContractsCount(): number {
    return this.activeContractsSubject.value.length;
  }

  public getActiveContractListObserver(): Observable<Array<Contract>> {
    return this.activeContracts;
  }

  public openContractCreator() {
    this.dialog.open(ContractCreateComponent).afterClosed().subscribe(result => {
      this.updateActiveContracts();
    });
  }

  public openContractDelete(contractToDeleteId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {question: "Delete Contract?"}});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.nerfumsService.deleteContractById(contractToDeleteId).subscribe(() => {
          this.updateActiveContracts();
        });
      }
    });
  }

  public openContractComplete(contract: any) {
    const dialogRef = this.dialog.open(ContractCompleteComponent, {
      data: {contract}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateActiveContracts();
    });
  }

  private updateActiveContracts() {
    this.nerfumsService.getOwnerContracts(true).subscribe(contracts => {
      this.activeContractsSubject.next(contracts);
    });
  }
}
