import { CartService } from 'src/app/services';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipping } from 'src/app/types';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent implements OnInit {
  // shippingCosts: Observable<Object>;
  shippingCosts: Shipping[];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingFee();
  }
}
