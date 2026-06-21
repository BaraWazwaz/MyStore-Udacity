import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  onQuantityChange(productId: number, quantity: any): void {
    const qty = Number(quantity);
    if (qty <= 0) {
      this.onRemoveItem(productId);
    } else {
      this.cartService.updateQuantity(productId, qty);
    }
  }

  onRemoveItem(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  onSubmitCheckout(): void {
    const total = this.getTotalPrice();
    this.cartService.setOrderDetails(this.fullName, total);
    this.cartService.clearCart();
    this.router.navigate(['/confirmation']);
  }
}
