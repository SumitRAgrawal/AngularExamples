import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
  <div>
    Hello
  </div>
  `
})

export class AppComponent implements OnInit {
  data = [1, 2 , 3 ];
  data$ = from(this.data);
  constructor() { }

  ngOnInit() {

    this.data$
      .subscribe(
        res => console.log(res),
        error => console.log(error),
        () => console.log('completed'));
   }


}
