import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/types';
import { books } from './book.sampleData';
import { CartService } from 'src/app/services';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  book: Book;
  phone: string;
  name: string;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}

  addToCart = (book: Book) => {
    this.cartService.addToCart(book);
    this.router.navigate(['/cart']);
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.book = books.filter(
        (book) => book.id.toString() === params.get('id')
      )[0];
    });
  }
}
