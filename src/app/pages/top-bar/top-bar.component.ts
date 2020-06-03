import { CartService } from 'src/app/services';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  total: number;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.total = this.cartService.calculateTotal();
  }

  ngDoCheck() {
    this.total = this.cartService.calculateTotal();
  }
}
