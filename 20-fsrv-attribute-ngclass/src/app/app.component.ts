import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  styles : [
    '.data {background-color:red }'
  ],
  template: `
  <div class="data">
    Div 1
  </div>
  <div [class.data]="data">
    Div 2
  </div>
  <div [ngClass]="{
    'data': data,
    'code': !data
  }">
  Div 3
</div>
  `
})

export class AppComponent implements OnInit {
  data = false;
  constructor() { }

  ngOnInit() { }
}
