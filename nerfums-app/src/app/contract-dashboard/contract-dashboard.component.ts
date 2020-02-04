import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ContractCreateComponent} from '../contract-create/contract-create.component';
import {NerfumsService} from "../nerfums.service";

@Component({
  selector: 'app-contract-dashboard',
  templateUrl: './contract-dashboard.component.html',
  styleUrls: ['./contract-dashboard.component.css']
})
export class ContractDashboardComponent implements OnInit {

  constructor(private nerfumsService: NerfumsService, public dialog: MatDialog) {
  }

  ngOnInit() {

  }

  openContractCreator() {
    this.dialog.open(ContractCreateComponent);
  }
}
