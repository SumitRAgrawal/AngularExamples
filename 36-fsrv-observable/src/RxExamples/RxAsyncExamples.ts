import { Observable } from 'rxjs';


export class RxAsyncExamples {
  initial = 10;
  getAsyncSyncCreated(): Observable<number> {

    return Observable.create(observer => {
      observer.next(10);
      observer.next(20);
      observer.next(30);
      observer.next(40);
      setTimeout(() => {
        observer.next(100);
      }, 5000);
    });
  }

  getAsyncContiniousEmitting(): Observable<number> {
    return Observable.create( observer => {
      setInterval(() => observer.next(this.initial++), 1000);
    });
  }
}
