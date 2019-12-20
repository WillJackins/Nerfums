import {Component, Input, OnInit} from '@angular/core';
import {Contract} from '../../model/Contract';

@Component({
  selector: 'app-contract-item',
  templateUrl: './contract-item.component.html',
  styleUrls: ['./contract-item.component.css']
})
export class ContractItemComponent implements OnInit {
  @Input() contract: Contract;

  displayedColumns: string[] = ['title', 'description', 'bonus'];

  constructor() { }

  ngOnInit() {
  }

}
