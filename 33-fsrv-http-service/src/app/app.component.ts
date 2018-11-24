import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  template: `
  <div>
    <div>
   <pre> {{data | json}} </pre>
    </div>
  </div>
  `
})

export class AppComponent implements OnInit {

  data  = {};
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDataFromServer().subscribe(result => this.data = result);
  }
}
