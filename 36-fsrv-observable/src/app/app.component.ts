import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
  <div>
    Hello
  </div>
  `
})

export class AppComponent implements OnInit, OnDestroy {
  data = [1, 2 , 3 ];
  data$ = from(this.data);
  subscription: Subscription;
  constructor() { }

  ngOnInit() {

    this.subscription = this.data$
      .subscribe(
        res => console.log(res),
        error => console.log(error),
        () => console.log('completed'));
   }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

}
