import { of, from, Observable, Subject } from 'rxjs';

export class RxSynchronousExamples {
  data = [1, 2, 3];
  getSynchonousObservableFrom(): Observable<number> {
    return from(this.data);
  }

  getSynchonousObservableOf(): Observable<number[]> {
    return of(this.data);
  }

  getSynchronousObservableCreate(): Observable<number> {
    return Observable.create(observer => {
      // tslint:disable-next-line:forin
      for (const i in this.data) {
        observer.next(i);
      }
      observer.complete();
      observer.next(100); // not emitted!
    });
  }
}
