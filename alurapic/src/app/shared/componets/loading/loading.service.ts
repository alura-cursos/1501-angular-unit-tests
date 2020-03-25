import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { LoandingType } from './loading-type';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  loadingSubject = new Subject<LoandingType>();

  getLoading() {
    return this.loadingSubject
      .asObservable()
      .pipe(startWith(LoandingType.STOPPED));
  }

  start() {
    this.loadingSubject.next(LoandingType.LOADING);
  }

  stop() {
    this.loadingSubject.next(LoandingType.STOPPED);
  }
}
