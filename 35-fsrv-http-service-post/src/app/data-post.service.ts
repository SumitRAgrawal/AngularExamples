import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPostService {

  constructor(private http: HttpClient) {
  }

  postData(data: Todo): Observable<any> {
   return  this.http.post('https://jsonplaceholder.typicode.com/todos', data);
  }
}
