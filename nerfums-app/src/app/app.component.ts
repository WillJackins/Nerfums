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

  testService: NerfumsService;

  constructor(private router: Router, private service: NerfumsService) {
    this.navLinks = [
      {
        label: 'About',
        link: './about',
        requireLogin: false,
        index: 0
      },
      {
        label: 'Contract List',
        link: './contractList',
        requireLogin: true,
        index: 1
      },
      {
        label: 'Contract Manager',
        link: './contractManager',
        requireLogin: true,
        index: 2
      }
    ];

    this.testService = service;
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  test(): void {
    console.log('BUTTON PRESS');
    if (!this.testService.currentSessionValue) {
      this.testService.login("Dave", "Dave_Password").subscribe();
    } else {
      this.testService.logout();
    }

  }
}
