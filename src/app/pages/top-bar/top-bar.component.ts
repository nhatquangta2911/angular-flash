import { Observable } from 'rxjs';
import { CartService } from 'src/app/services';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from 'src/app/types';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  total: number;
  displayDialog;
  cart: Observable<Cart>;
  constructor(
    private cartService: CartService,
    private cartStore: Store<{ cart: Cart }>
  ) {}

  ngOnInit() {
    this.cart = this.cartStore.select('cart');
    this.total = this.cartService.calculateTotal();
  }

  ngDoCheck() {
    this.total = this.cartService.calculateTotal();
  }
}
