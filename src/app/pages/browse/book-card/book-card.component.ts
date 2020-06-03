import { Component, OnInit, Input, Output } from '@angular/core';
import { Book } from 'src/app/types';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  author: string;
  constructor() {}

  ngOnInit() {
    this.author = this.book.authors[0];
  }
}
