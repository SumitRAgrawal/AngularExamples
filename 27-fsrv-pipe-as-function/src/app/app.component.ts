import { Component, OnInit } from '@angular/core';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
  <div>
    {{ name }}
    {{ price }}
  </div>
`
})

export class AppComponent implements OnInit {
  name = 'Hello World';
  price: string | number = 200;
  constructor(private upipe: UpperCasePipe, private cpipe: CurrencyPipe) { }

  ngOnInit() {
    this.name = this.upipe.transform(this.name);
    this.price = this.cpipe.transform(this.price, 'INR', 'symbol');
  }
}
