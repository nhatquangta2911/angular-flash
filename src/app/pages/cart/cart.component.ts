import { ModalService } from './../../services/modal.service';
import { CartService } from 'src/app/services';
import { Component, OnInit } from '@angular/core';
import { Book, Delivery } from 'src/app/types';
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
  deliveryInfo: Delivery;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private modalService: ModalService
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      phoneNumber: '',
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.calculateTotal();
  }

  onSubmit(content, deliveryInfo) {
    this.items = this.cartService.clearCart();
    this.total = 0;
    this.checkoutForm.reset();
    this.deliveryInfo = deliveryInfo;
    this.modalService.open(content);
  }

  triggerShippingFeeModal(content) {
    this.modalService.open(content);
  }
}
