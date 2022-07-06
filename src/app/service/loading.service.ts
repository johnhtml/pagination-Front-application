import { BehaviorSubject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService implements OnInit {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoading$.next(true);
  }

  loadingOff(): void {
    this.isLoading$.next(false);
  }

  loadingOn(): void {
    this.isLoading$.next(true);
  }
}
