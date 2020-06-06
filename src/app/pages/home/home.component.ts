import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './../../services/modal.service';
import { GenericService } from './../../services/generic.service';
import { bookTitles } from '../book/book.sampleData';
import { Cart } from 'src/app/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  bookTitles = [];
  error: boolean = false;
  cards;
  cart: Observable<Cart>;

  constructor(
    private router: Router,
    private modalService: ModalService,
    private genericService: GenericService,
    private store: Store<{ cart: Cart }>
  ) {}

  ngOnInit() {
    this.isLoading = false;
    this.bookTitles = bookTitles;
    this.cart = this.store.select('cart');
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
}
