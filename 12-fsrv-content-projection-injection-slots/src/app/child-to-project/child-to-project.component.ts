import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-to-project',
  template : `
  <div>
    Child to be projected
  </div>
  `
})
export class ChildToProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
