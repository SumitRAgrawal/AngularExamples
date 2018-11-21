import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    This is parent component
    <app-child></app-child>
  </div>
  `
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
