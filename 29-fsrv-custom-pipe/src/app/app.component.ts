import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    Keys : {{ value | extractKeys }}
  </div>
  `
})

export class AppComponent implements OnInit {

  value = {
    a: 1,
    b: 2,
    c: 3
  };
  constructor() { }

  ngOnInit() { }
}
