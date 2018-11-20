import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <button (click)="handleClick()">
      Click Me
    </button>
    <input type="text" [value] = "name">
    <div>
      {{name}}
    </div>
  </div>
  `
})

export class AppComponent implements OnInit {
  name;
  constructor() { }

  handleClick() {
    this.name = 'fiserv';
  }
  ngOnInit() { }
}
