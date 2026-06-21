import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  fullName: string = '';
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    const details = this.cartService.getOrderDetails();
    this.fullName = details.name;
    this.total = details.total;
  }
}
