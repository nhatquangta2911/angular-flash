import {
  trigger,
  animate,
  animation,
  style,
  useAnimation,
  state,
  transition,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book, Delivery } from 'src/app/types';
import { CartService } from 'src/app/services';
import { ModalService } from './../../services/modal.service';
import { GenericAnimations } from '../../shared/animations';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [
    trigger('openClosed', [
      state(
        'open',
        style({
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
        })
      ),
      transition('closed => open', [
        style({ transform: 'translateX(100%)' }),
        animate('0.3s'),
      ]),
      transition('open => closed', [animate('0.3s')]),
    ]),
  ],
})
export class CartComponent implements OnInit {
  items: Book[];
  total: number = 0;
  checkoutForm: FormGroup;
  deliveryInfo: Delivery;
  openDelivery: boolean = false;

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

  onTriggerOpenDelivery() {
    this.openDelivery = true;
  }

  onSubmit(content, deliveryInfo) {
    this.openDelivery = true;
    this.items = this.cartService.clearCart();
    this.total = 0;
    this.checkoutForm.reset();
    this.deliveryInfo = deliveryInfo;
    this.modalService.open(content);
    this.openDelivery = false;
  }

  triggerShippingFeeModal(content) {
    this.modalService.open(content);
  }
}
