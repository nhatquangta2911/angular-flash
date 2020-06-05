import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  loadedCards;
  constructor(private http: HttpClient) { }

  fetchCards() {
    return this.http.get('https://shawn-movie-rental.herokuapp.com/api/cards/recent');
  }

}
