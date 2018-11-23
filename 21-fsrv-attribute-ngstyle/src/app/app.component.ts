import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div [style.backgroundColor]="'red'">
    Div 1
  </div>
  <div [ngStyle]="{
    backgroundColor: 'red'
  }">
    Div 2
  </div>
  `
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
