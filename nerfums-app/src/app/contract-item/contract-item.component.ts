import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contract-item',
  templateUrl: './contract-item.component.html',
  styleUrls: ['./contract-item.component.css']
})
export class ContractItemComponent implements OnInit {
  @Input() contract: any;

  constructor() { }

  ngOnInit() {
  }

}
