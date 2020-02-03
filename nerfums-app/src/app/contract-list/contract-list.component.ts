import {Component, OnInit} from '@angular/core';
import {NerfumsService} from '../nerfums.service';
import {Contract} from '../../model/Contract';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  allActiveContracts: Array<Contract>;
  currentActiveContracts: Array<Contract>;

  defaultPageIndex: number;
  defaultPageSize: number;

  constructor(private nerfumsService: NerfumsService) {
  }

  ngOnInit() {
    this.allActiveContracts = new Array<Contract>();
    this.nerfumsService.getPostedContracts().subscribe(data => {
      this.allActiveContracts = data;

      this.defaultPageIndex = 0;
      this.defaultPageSize = 5;

      this.updateContractList(this.defaultPageIndex, this.defaultPageSize);
    });
  }

  private paginatorEvent(event?: PageEvent) {
    this.updateContractList(event.pageIndex, event.pageSize);
  }

  private updateContractList(pageIndex: number, pageSize: number) {
    this.currentActiveContracts = this.allActiveContracts.slice((pageIndex * pageSize), (pageIndex * pageSize) + pageSize);
  }
}
