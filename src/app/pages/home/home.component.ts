import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './../../services/modal.service';
import { GenericService } from './../../services/generic.service';
import { bookTitles } from '../book/book.sampleData';
import { Cart } from 'src/app/types';
import { filter, map } from 'rxjs/operators';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  bookTitles = [];
  error: boolean = false;
  cards;
  cart: Observable<Cart>;
  hideBanner: boolean = false;
  private firstSubscription: Subscription;

  constructor(
    private router: Router,
    private modalService: ModalService,
    private genericService: GenericService,
    private homeService: HomeService,
    private store: Store<{ cart: Cart }>
  ) {}

  ngOnInit(): void {
    this.isLoading = false;
    this.bookTitles = bookTitles;
    this.cart = this.store.select('cart');
    this.homeService.hideBanner.subscribe(
      (didHideBanner) => (this.hideBanner = didHideBanner)
    );
    const customObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 3) {
          observer.complete();
        }
        if (count > 5) {
          observer.error(new Error('Count is greater than 5'));
        }
        count++;
      }, 1000);
    });
    this.firstSubscription = customObservable
      .pipe(
        filter((data) => data > 1),
        map((data) => `Turn #${data}`)
      )
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error),
        () => console.log('COMPLETED')
      );
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

  onFetchCards(content) {
    this.isLoading = true;
    this.modalService.open(content);
    this.genericService.fetchCards().subscribe(
      (cards) => {
        this.isLoading = false;
        this.cards = cards;
      },
      (error) => {
        this.error = true;
      }
    );
  }

  onToggleBanner() {
    this.homeService.hideBanner.next(!this.hideBanner);
  }
}
