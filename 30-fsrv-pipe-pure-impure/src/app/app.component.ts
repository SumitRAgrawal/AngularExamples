import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
      Pure : {{data | pure | json}}
  </div>
  <div>
    Impure : {{data | impure | json }}
  </div>
  `
})

export class AppComponent implements OnInit {

  data = {
    a: 2,
    b: 5
  };

  constructor() { }

  ngOnInit() { }
}
