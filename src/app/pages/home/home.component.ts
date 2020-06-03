import { Component, OnInit, OnDestroy } from '@angular/core';
import { bookTitles } from '../book/book.sampleData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  bookTitles = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoading = false;
    this.bookTitles = bookTitles;
  }
}
