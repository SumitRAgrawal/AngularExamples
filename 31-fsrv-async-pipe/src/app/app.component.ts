import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <div>Time: {{ time | async }} </div>
  <button (click)="clicked()">{{ arrived ? 'Reset' : 'Resolve' }}</button>
  <span>Wait for it... {{ greeting | async }}</span>
  <div> {{greeting  }} </div>
  `
})

export class AppComponent implements OnInit {

  time = new Observable<string>(
    (obs: Observer<string>) => {
      setInterval(() => {
        obs.next(new Date().toString());
      }, 1000);
    }
  );
  greeting: Promise<string>|null = null;
  arrived = false;

  private resolve: Function|null = null;

  constructor() { this.reset(); }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve('hi there!');
      this.arrived = true;
    }
  }
  ngOnInit() { }
}
