import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div>
    This is child component - got data : {{data}}
  </div>
  <div>
  <button (click)="stopTimer()">
  Stop
  </button>
  </div>
  `
})

export class ChildComponent implements OnInit {
  @Input()
  data;

  @Output()
  stop: EventEmitter<boolean> = new EventEmitter<boolean>();
  stopTimer() {
    this.stop.emit(true);
  }

  constructor() { }

  ngOnInit() { }
}
