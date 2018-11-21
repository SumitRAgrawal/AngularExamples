import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-projected',
  template: `
    <p>
      to be a projected component
    </p>
    <button (click)="buttonClicked()">Click Me</button>
  `
})
export class ChildProjectedComponent implements OnInit {

  @Output() btnClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  buttonClicked() {
    this.btnClicked.emit(true);
  }

  ngOnInit() {
  }

}
