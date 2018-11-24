import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div> Main Page
  </div>
  <div>
    <router-outlet></router-outlet>
  </div>
  <div>
    <router-outlet name="second"></router-outlet>
  </div>
  <div>
    <router-outlet name="third"></router-outlet>
  </div>
  `,
  styles : ['a {padding: 5px}']
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
