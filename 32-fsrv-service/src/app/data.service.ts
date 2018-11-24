import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData() {
    return [1, 2, 3, 4];
  }
  constructor() { }
}
