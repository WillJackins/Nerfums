import {Component, Input, OnInit} from '@angular/core';
import {Contract} from '../../model/Contract';

@Component({
  selector: 'app-contract-item',
  templateUrl: './contract-item.component.html',
  styleUrls: ['./contract-item.component.css']
})
export class ContractItemComponent implements OnInit {
  @Input() contract: Contract;
  private targetAvatar: string;
  displayedColumns: string[] = ['title', 'description', 'bonus'];

  constructor() { }

  ngOnInit() {
    console.log(this.contract.contractTarget.userAvatar)
    console.log(this.contract.contractOwner.userAvatar)
    this.targetAvatar = 'data:image/png;base64,'+ this.contract.contractTarget.userAvatar;
  }

}
