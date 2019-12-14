import { Component, OnInit } from '@angular/core';
import { NerfumsService } from '../nerfums.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Array<any>;

  constructor(private nerfumsService: NerfumsService) { }

  ngOnInit() {
    this.nerfumsService.getAllContracts().subscribe(data => {
      this.contracts = data;
    });
  }

}
