import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  providers: [],
  viewProviders: [],
  entryComponents: [],
  preserveWhitespaces: false,
  template: `
  <div>
    Hello Fiserv
  </div>
  `,
  //  styleUrls : [],
  // animations: [],
  // styles: [],
  // templateUrl : '',
  // moduleId : id, // systemJS
  // encapsulation : ViewEncapsulation.Emulated,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
