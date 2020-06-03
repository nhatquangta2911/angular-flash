import { CartService } from 'src/app/services';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items: Book[];
  total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.calculateTotal();
  }
}
