import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
      This is parent component rendering child
      <app-child [data]="value" (stop)="stopTimer($event)" ></app-child>
  </div>
  `
})

export class AppComponent implements OnInit {
  value = 0;
  stop = false;
  constructor() { }

  stopTimer(value) {
    if (value) {
      this.stop = true;
    }
  }

  tick() {
    setTimeout(() => {
      if (!this.stop) {
        this.value = this.value + 1;
        this.tick();
      }
    }, 1000);
  }
  ngOnInit() {
    this.tick();
  }
}
