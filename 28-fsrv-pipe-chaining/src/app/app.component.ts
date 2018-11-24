import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>{{ holiday | date:'fullDate' | uppercase | slice:0:6 }}</div>

    {{holiday}}
  `
})
export class AppComponent implements OnInit {
  holiday = new Date(2018, 12, 25);
  constructor() {}

  ngOnInit() {}
}
