import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/types';
import { books } from './book.sampleData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  book: Book;
  phone: string;
  name: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('here');
    this.route.paramMap.subscribe((params) => {
      this.book = books.filter(
        (book) => book.id.toString() === params.get('id')
      )[0];
    });
  }
}

//component: form / parent - child
//service:
//module
//routing
