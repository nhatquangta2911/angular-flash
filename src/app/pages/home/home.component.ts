import { ModalService } from './../../services/modal.service';
import { GenericService } from './../../services/generic.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { bookTitles } from '../book/book.sampleData';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
    private modalService: ModalService,
    private genericService: GenericService
  ) {}

  ngOnInit() {
    this.isLoading = false;
    this.bookTitles = bookTitles;
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
