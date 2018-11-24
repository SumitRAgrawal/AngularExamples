import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
  <div> Hello </div>
  <div *ngFor="let item of data">
    {{item}}
  </div>
  `
})

export class AppComponent implements OnInit {
  data;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
  }
}
