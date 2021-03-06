import { CartService } from 'src/app/services';
import { ModalService } from './../../services/modal.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Book } from 'src/app/types';
import { books } from '../book/book.sampleData';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  books: Book[] = [];
  latestViewedBook: string = '';
  showModal: boolean = false;
  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.books = books;
    this.latestViewedBook = books[0].title;
  }

  ngOnChanges(changes: SimpleChanges): void {}

  onView = (booktitle: string): void => {
    this.latestViewedBook = booktitle;
  };

  triggerModal(content) {
    this.modalService.open(content);
  }
}
