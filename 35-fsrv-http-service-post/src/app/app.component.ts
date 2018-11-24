import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { DataPostService } from './data-post.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  template: `
  <div>
    Status : {{status}}
  </div>
  `
})

export class AppComponent implements OnInit {
  status: number | string = 0;
  constructor(private postService: DataPostService) { }

  ngOnInit() {
    const todo: Todo = new Todo({
      id: 1,
      userId: 1,
      title: 'sumit',
      completed: false
    });

    this.postService.postData(todo)
      .subscribe( res => this.status = res.id,
          error => this.status = 'Error occured');
  }
}
