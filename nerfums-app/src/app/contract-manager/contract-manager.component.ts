import { Component, OnInit } from '@angular/core';
import {NerfumsService} from '../nerfums.service';
import {Contract} from '../../model/Contract';

@Component({
  selector: 'app-contract-manager',
  templateUrl: './contract-manager.component.html',
  styleUrls: ['./contract-manager.component.css']
})
export class ContractManagerComponent implements OnInit {
  userActiveContracts: Array<Contract>;

  constructor(private nerfumsService: NerfumsService) { }

  ngOnInit() {
    this.nerfumsService.getUsersContracts(1).subscribe(data => this.userActiveContracts = data);
  }

}
