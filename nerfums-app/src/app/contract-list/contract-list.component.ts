import { Component, OnInit } from '@angular/core';
import { NerfumsService } from '../nerfums.service';
import {Contract} from '../../model/Contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  allContracts: Array<Contract>;
  pageCount: number;
  pageSize: number;

  currentContracts: Array<any>;
  currentPage: number;

  constructor(private nerfumsService: NerfumsService) { }

  ngOnInit() {
    this.nerfumsService.getAllContracts().subscribe(data => {
      this.allContracts = data;
      this.pageSize = 3;
      this.pageCount = this.allContracts.length / this.pageSize;

      this.currentPage = 0;
      this.currentContracts = this.getContractsFromPageNum(this.currentPage);
    });
  }

  private getContractsFromPageNum(page: number) {
    return this.allContracts.slice((page * this.pageSize), (page * this.pageSize) + this.pageSize);
  }

  nextPage() {
    if (this.hasNextPage()) {
      this.currentPage++;
      this.currentContracts = this.getContractsFromPageNum(this.currentPage);
    }
  }

  prevPage() {
    if (this.hasPrevPage()) {
      this.currentPage--;
      this.currentContracts = this.getContractsFromPageNum(this.currentPage);
    }
  }

  hasNextPage() {
    return this.currentPage < this.pageCount - 1;
  }

  hasPrevPage() {
    return this.currentPage > 0;
  }

}
