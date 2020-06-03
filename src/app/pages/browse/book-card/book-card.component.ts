import { Component, OnInit, Input, Output } from '@angular/core';
import { Book } from 'src/app/types';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  @Output() latestViewedBook = new EventEmitter<string>();
  author: string;
  constructor() {}

  ngOnInit() {
    this.author = this.book.authors[0];
  }

  sendLatestViewedBook = (bookTitle: string) => {
    this.latestViewedBook.emit(bookTitle);
  };
}
