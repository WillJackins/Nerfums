import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nerfums';

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'About',
        link: './about',
        requireLogIn: false,
        index: 0
      },
      {
        label: 'Contract List',
        link: './contractList',
        requireLogIn: true,
        index: 1
      },
      {
        label: 'Contract Manager',
        link: './contractManager',
        requireLogIn: true,
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
