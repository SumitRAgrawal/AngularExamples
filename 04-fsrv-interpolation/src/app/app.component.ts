import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    Hello {{ companyName }}
  </div>
  <div>
    Sum is {{ first + second }}
  </div>

  <div>
    {{ interesting ? 'Today is interesting' : 'Today is boring '}}
  </div>
  `
})

export class AppComponent implements OnInit {
  companyName: string = 'fiserv';
  first = 10;
  second = 20;
  interesting = false;

  constructor() { }

  ngOnInit() { }
}
