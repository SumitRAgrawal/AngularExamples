import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    Hello
  </div>
  <input type="text" #inputbox>
  `
})

export class AppComponent implements OnInit,  AfterViewInit {

  @ViewChild('inputbox') el: ElementRef<HTMLInputElement>;
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    console.log(this.el);
  }
}
