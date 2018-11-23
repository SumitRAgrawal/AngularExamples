import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <input type="text" appToggle #toggleRef="toggle">
  <button (click)="toggleRef.handleToggle()">Toggler</button>
  </div>
  `
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
