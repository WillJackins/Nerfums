import {Component, OnInit, ViewChild} from '@angular/core';
import { NerfumsService } from '../nerfums.service';
import {Contract} from '../../model/Contract';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  allContracts: Array<Contract>;
  currentContracts: Array<Contract>;

  defaultPageIndex: number;
  defaultPageSize: number;

  constructor(private nerfumsService: NerfumsService) { }

  ngOnInit() {
    this.allContracts = new Array<Contract>();
    this.nerfumsService.getAllContracts().subscribe(data => {
      this.allContracts = data;

      this.defaultPageIndex = 0;
      this.defaultPageSize = 5;

      this.updateContractList(this.defaultPageIndex, this.defaultPageSize);
    });
  }

  private paginatorEvent(event?: PageEvent) {
    this.updateContractList(event.pageIndex, event.pageSize);
  }

  private updateContractList(pageIndex: number, pageSize: number) {
    this.currentContracts = this.allContracts.slice((pageIndex * pageSize), (pageIndex * pageSize) + pageSize);
  }
}
