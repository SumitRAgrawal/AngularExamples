import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    Hello
    <app-child>
    <app-child-projected></app-child-projected>
    <app-child-projected></app-child-projected>
    <app-child-projected></app-child-projected>
    </app-child>
  </div>
  `
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
