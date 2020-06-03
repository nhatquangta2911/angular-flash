import { CartService } from 'src/app/services';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit, OnChanges {
  total: number;
  constructor(private cartService: CartService) {}
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.total = this.cartService.calculateTotal();
  }
  ngOnInit() {
    this.total = this.cartService.calculateTotal();
  }
}
