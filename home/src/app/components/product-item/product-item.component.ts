import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<{product: Product, quantity: number}>();
  
  quantity: number = 1;
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.addToCart.emit({ product: this.product, quantity: Number(this.quantity) });
  }
}
