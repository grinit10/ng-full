import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObservableSubscription: Subscription;
  customObservableSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    const generatedObservable = interval(1000);
    this.numbersObservableSubscription = generatedObservable.subscribe(
      (val) => console.log(val));

    const customObservable = Observable.create((observer: Observer<String>) => {
      setTimeout(() => observer.next('After 2 seconds'), 2000);
      setTimeout(() => observer.next('After 4 seconds'), 4000);
      setTimeout(() => observer.error('After 5 seconds got error'), 5000);
      setTimeout(() => observer.complete(), 6000);
    });

    this.customObservableSubscription = customObservable.subscribe(
      val => console.log(val),
      err => console.log(err),
      () => console.log('complete')
    );
  }

  ngOnDestroy() {
    this.numbersObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }
}
