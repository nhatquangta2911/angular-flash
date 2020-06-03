import { Injectable } from '@angular/core';
import { Book } from '../types';

@Injectable({
  providedIn: 'root',
})
export default class CartService {
  items: Book[] = [];
  constructor() {}

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
}

//component: form / parent - child
//service:
//module
//routing
