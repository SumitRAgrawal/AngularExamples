import { Component, OnInit } from '@angular/core';
import { DataErrorService } from './data-error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
  <div>
    Hello {{result}}
  </div>
  `
})

export class AppComponent implements OnInit {
  result: any = 'World';
  constructor(private dataService: DataErrorService) { }

  ngOnInit() {
    this.dataService.getDataHandled()
      .subscribe(res => this.result = res, error => console.log(error));

    this.dataService.getDataUnhandled()
      .subscribe(res => console.log('Response from unhandled'),
        (error: HttpErrorResponse) => console.error(`Error handled by component ${error.message}`));
  }


}
