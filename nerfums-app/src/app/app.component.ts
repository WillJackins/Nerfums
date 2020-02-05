import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NerfumsService} from "./nerfums.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nerfums';

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router, private nerfumsService: NerfumsService) {
    this.navLinks = [
      {
        label: 'About',
        link: './about',
        unauthenticated: true,
        index: 0
      },
      {
        label: 'Contract List',
        link: './contractList',
        unauthenticated: false,
        index: 1
      },
      {
        label: 'Contract Manager',
        link: './contractManager',
        unauthenticated: false,
        index: 2
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
