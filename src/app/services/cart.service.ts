import { Injectable } from '@angular/core';
import { Book } from '../types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export default class CartService {
  items: Book[] = [];
  constructor(private http: HttpClient) {}

  addToCart(book: Book) {
    this.items.push(book);
  }

  getItems(): Book[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  calculateTotal() {
    const total = this.items.reduce(
      (accumulator, current) => accumulator + current.price,
      0
    );
    return total;
  }

  getShippingFee() {
    // return this.http.get('./shipping.json');
    return [
      {
        type: 'Overnight',
        price: 10.99,
      },
      {
        type: '2-Day',
        price: 7.99,
      },
      {
        type: 'Postal',
        price: 3.99,
      },
    ];
  }
}

//component: form / parent - child
//service:
//module
//routing
