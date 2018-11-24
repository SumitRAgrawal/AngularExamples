import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataErrorService {

  constructor(private http: HttpClient) { }

  getDataUnhandled(): Observable<any> {
    return this.http
    .get('https://jsonplaceholder.typicode.com/todosss');
  }

  getDataHandled() {
    return this.http
    .get('https://jsonplaceholder.typicode.com/todosss')
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error(`Error occured in Handled : ${error.message}`);
    return of('');
  }
}
