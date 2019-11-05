import { Injectable } from '@angular/core';

interface AddToCartInterface {
  name: string,
  price: number,
  uid:  number,
  rating: number
};

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  cartItems = [];
  constructor() {
    console.log("Add to cart service")
   }

  addToCart ( product: AddToCartInterface ) {
    this.cartItems.push(product);
    console.log(this.cartItems)
  }

  showCartItems () {
    console.log(this.cartItems);
  }

}
