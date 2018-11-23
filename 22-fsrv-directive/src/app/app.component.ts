import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <input type="text" appValidNumber>
  </div>
  `
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
