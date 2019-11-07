import { Component, OnInit } from '@angular/core';
import { AddtocartService } from 'src/app/services/addtocart.service';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit {
  productItem = 0;
  qty = 1;
  products = [ 
    { 
      name:"Product 1", 
      price:"17",
      uid:1,
      rating:5,
      qty:1
    },
    { 
      name:"Product 2", 
      price:"15",
      uid:2,
      rating:3,
      qty:1
    },
    { 
      name:"Product 3", 
      price:"11",
      uid:3,
      rating:1,
      qty:1
    },
    { 
      name:"Product 4", 
      price:"18",
      uid:4,
      rating:2,
      qty:1
    }
];

  constructor(private addToCartService: AddtocartService) { }

  ngOnInit() {
  }

  addToCart( event, data ) {
    console.log(data.uid);
    this.addToCartService.addToCart(data);
    this.productItem = this.addToCartService.cartItems.length;
  }

  showProducts() {
    if(this.addToCartService.cartItems.length) {
      alert(this.addToCartService.cartItems);
    } else {
      alert("Sorry You have no items")
    }
  }

  resetCart() {
    this.addToCartService.cartItems = [];
    this.productItem = 0;
  }

  increaseQty(event) { 
     event.target.closest(".product-qty").querySelectorAll(".qntty")[0].innerText = +event.target.closest(".product-qty").querySelectorAll(".qntty")[0].innerText + 1;
  }
  
  decreaseQty(event) {
    if(+event.target.closest(".product-qty").querySelectorAll(".qntty")[0].innerText > 1){
      event.target.closest(".product-qty").querySelectorAll(".qntty")[0].innerText = +event.target.closest(".product-qty").querySelectorAll(".qntty")[0].innerText -1;
    } else {
      alert("Do you wish to delete the selected product");
    }
  }

}
