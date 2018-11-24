import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
        <a routerLink = "/" >Home</a>
        <a routerLink = "/about" >About</a>
        <a routerLink = "/lazy" >Lazy</a>
        <a routerLink = "/heavy" >Heavy</a>
        <a routerLink = "/wrong" >Not Found</a>

  </div>
  <router-outlet></router-outlet>
  `,
  styles : ['a {padding: 5px}']
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
