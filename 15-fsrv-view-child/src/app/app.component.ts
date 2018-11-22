import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    Hello
    <app-child></app-child>
  </div>
  `
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
