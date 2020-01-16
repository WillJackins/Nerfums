import { Component, OnInit } from '@angular/core';
import {NerfumsService} from '../nerfums.service';
import {Contract} from '../../model/Contract';

@Component({
  selector: 'app-contract-manager',
  templateUrl: './contract-manager.component.html',
  styleUrls: ['./contract-manager.component.css']
})
export class ContractManagerComponent implements OnInit {
  allUserContractHistory: Array<Contract>;
  constructor(private nerfumsService: NerfumsService) { }

  ngOnInit() {
  }

  private retrieveUserContractHistoryList() {
    this.nerfumsService.getAllContractsByOwnerId(1, true).subscribe(data => {
      this.allUserContractHistory = data;
    })
  }
}
