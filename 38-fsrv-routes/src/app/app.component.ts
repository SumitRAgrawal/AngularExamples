import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    Hello
  </div>
  <router-outlet></router-outlet>
  `
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
