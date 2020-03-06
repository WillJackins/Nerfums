import {Component, OnInit, ViewChild} from '@angular/core';
import {Contract} from '../../model/Contract';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {ContractManagerComponent} from "../contract-manager/contract-manager.component";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-contract-active-list',
  templateUrl: './contract-active-list.component.html',
  styleUrls: ['./contract-active-list.component.css']
})
export class ContractActiveListComponent implements OnInit {
  displayColumns: string[] = ['index', 'contractTarget', 'contractReward', 'contractDetails', 'contractDelete', 'contractComplete'];

  private currentContractSubject: BehaviorSubject<Array<Contract>>;
  private currentContracts: Observable<Array<Contract>>;

  pageIndex: number;
  pageSize: number;

  constructor(private contractManager: ContractManagerComponent) {
  }

  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  ngOnInit() {
    this.currentContractSubject = new BehaviorSubject<Array<Contract>>(new Array<Contract>());
    this.currentContracts = this.currentContractSubject.asObservable();

    this.pageIndex = 0;
    this.pageSize = 5;

    this.updateCurrentContracts();
  }

  private updateCurrentContracts() {
    this.contractManager.getActiveContractListObserver().subscribe(contracts => {
      this.currentContractSubject.next(contracts.slice((this.pageIndex * this.pageSize), (this.pageIndex * this.pageSize) + this.pageSize));
    });
  }

  private paginatorEvent(event?: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.updateCurrentContracts();
  }
}
