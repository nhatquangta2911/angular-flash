import { ADD_ITEM_INTO_CART } from './../cart/cart.actions';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book, Cart } from 'src/app/types';
import { books } from './book.sampleData';
import { CartService } from 'src/app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  book: Book;
  phone: string;
  name: string;
  books: Observable<{ books: Book[] }>;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router,
    private store: Store<{ book: { books: Book[] } }>,
    private cartStore: Store<{ cart: Cart }>
  ) {}

  addToCart = (book: Book) => {
    this.cartService.addToCart(book);
    this.cartStore.dispatch({ type: ADD_ITEM_INTO_CART, book: book });
    this.router.navigate(['/cart']);
  };

  ngOnInit(): void {
    this.books = this.store.select('book');
    this.route.paramMap.subscribe((params) => {
      this.book = books.filter(
        (book) => book.id.toString() === params.get('id')
      )[0];
    });
  }
}
