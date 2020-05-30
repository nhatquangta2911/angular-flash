import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass'],
})
export class BookComponent implements OnInit {
  book: Book;

  constructor() {
    this.book = {
      title: 'Zero To One',
      price: 9.99,
      tags: ['self-help', 'entrepreneurship', 'startup', 'tech'],
    } as Book;
  }

  ngOnInit(): void {}
}
