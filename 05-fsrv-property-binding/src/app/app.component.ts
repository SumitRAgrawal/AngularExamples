import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div >
    <h1 [innerHTML]="title"></h1>
    <h1>{{ title }}</h1>
    <img [src]="logo">
    <br>
    <input type="text" [value]="name">
    <div>{{ name }}</div>
  </div>
  `
})
export class AppComponent implements OnInit {

  title = 'fiserv app';
  name;
  logo = './assets/fiserv.png';

  ngOnInit() {
    this.name = 'Hello World';
  }
}
