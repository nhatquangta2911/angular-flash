import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/types';
import { books } from '../book/book.sampleData';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  books: Book[] = [];
  constructor() {}

  ngOnInit() {
    this.books = books;
  }
}
