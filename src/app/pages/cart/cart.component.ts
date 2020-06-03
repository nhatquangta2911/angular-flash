import { CartService } from 'src/app/services';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/types';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items: Book[];
  total: number = 0;
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.calculateTotal();
  }

  onSubmit(user) {
    this.items = this.cartService.clearCart();
    this.total = 0;
    this.checkoutForm.reset();
    alert(JSON.stringify(user, null, 2));
  }
}
