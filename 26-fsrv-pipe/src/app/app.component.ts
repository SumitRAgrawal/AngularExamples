import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    {{name | uppercase }}
    {{ price | currency:'INR':'symbol':'2.3' }}
  </div>
  `
})

export class AppComponent implements OnInit {
  name = 'Hello World';
  price = 200;
  constructor() { }

  ngOnInit() { }
}
