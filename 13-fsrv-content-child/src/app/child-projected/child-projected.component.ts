import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-projected',
  template: `
    <p>
      my content will be projected
    </p>
    <button (click)="clicked()"> Click me</button>
  `
})
export class ChildProjectedComponent  {

  @Output()
  buttonClicked: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  clicked() {
    this.buttonClicked.emit(true);
  }

}
