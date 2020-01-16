import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/model/Contract';
import { NerfumsService } from '../nerfums.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contract-user-history-list',
  templateUrl: './contract-user-history-list.component.html',
  styleUrls: ['./contract-user-history-list.component.css']
})
export class ContractUserHistoryListComponent implements OnInit {
  allUserContractHistory: Array<Contract>;

  displayColumns: string[] = ['index', 'contractTarget', 'contractDetails', 'contractReward', 'contractCompletedBy'];
  constructor(private nerfumsService: NerfumsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getUserContractHistory();
  }

  private getUserContractHistory(){
    this.nerfumsService.getAllContractsByOwnerId(1, false).subscribe(data => {
      this.allUserContractHistory = data;
    })
  }

  private getTotalReward() : number{
    return 10;
  }
}