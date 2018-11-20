import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
  <button (click)="handleClick()">
    Click Me
  </button>
  <input
    type="text"
    [value]="name"
    (input)="handleChange($event)">

  <div>{{ name }}</div>
</div>
  `
})

export class AppComponent implements OnInit {
  name = 'Fiserv';
  handleClick() {
    this.name = 'Angular';
  }
  handleChange(event) {
    this.name = event.target.value;
  }
  constructor() { }

  ngOnInit() { }
}
