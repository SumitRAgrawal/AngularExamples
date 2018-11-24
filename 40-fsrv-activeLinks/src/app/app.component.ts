import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
        <a routerLink = "/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" >Home</a>
        <a routerLink = "/about" routerLinkActive="active"  >About</a>
        <a routerLink = "/wrong" routerLinkActive="active" >Not Found</a>

  </div>
  <router-outlet></router-outlet>
  `,
  styles: ['a {padding: 5px}', '.active {color: #ff6600}']
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
