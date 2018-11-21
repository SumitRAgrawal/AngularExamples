import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div>
    <p>
      This is child component
    </p>
    <div>
      <ng-content select="h2"></ng-content>
      <div> Div after H2</div>
      <ng-content select="input"></ng-content>
      <div>Div after Input</div>
      <ng-content select="app-child-to-project"></ng-content>
    </div>
  </div>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
