import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  fetchCards() {
    return this.http
      .get('https://shawn-movie-rental.herokuapp.com/api/cards/recent', {
        headers: new HttpHeaders({ 'Custom-Header': 'Shawn' }),
        params: new HttpParams().set('print', 'pretty'),
      })
      .pipe(catchError((responseError) => throwError(responseError)));
  }
}
