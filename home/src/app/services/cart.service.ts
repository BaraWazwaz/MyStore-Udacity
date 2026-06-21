import { Injectable } from '@angular/core';
import { Product, CartItem } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private orderDetails = { name: '', total: 0 };

  constructor() { }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(product: Product, quantity: number): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity = Number(existingItem.quantity) + Number(quantity);
    } else {
      this.cartItems.push({ product, quantity: Number(quantity) });
    }
    alert(`Added ${quantity} x ${product.name} to the cart.`);
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item) {
      item.quantity = Number(quantity);
    }
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    alert('Removed item from the cart.');
  }

  clearCart(): void {
    this.cartItems = [];
  }

  setOrderDetails(name: string, total: number): void {
    this.orderDetails = { name, total };
  }

  getOrderDetails() {
    return this.orderDetails;
  }
}
