import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
      This is parent component rendering child
      <app-child [data]="value"></app-child>
  </div>
  `
})

export class AppComponent implements OnInit {
  value = 0;
  constructor() { }

  tick() {
    setTimeout(() => {
      this.value = this.value + 1;
      this.tick();
    }, 1000);
  }
  ngOnInit() {
    this.tick();
  }
}
