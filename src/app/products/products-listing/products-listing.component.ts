import { Component, OnInit } from '@angular/core';
import { AddtocartService } from 'src/app/services/addtocart.service';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.sass']
})
export class ProductsListingComponent implements OnInit {

  products = [ 
    { 
      name:"Product 1", 
      price:"17",
      uid:1,
      rating:5
    },
    { 
      name:"Product 2", 
      price:"15",
      uid:2,
      rating:3
    },
    { 
      name:"Product 3", 
      price:"11",
      uid:3,
      rating:1
    },
    { 
      name:"Product 4", 
      price:"18",
      uid:4,
      rating:2
    }
];

  constructor(private addToCartService: AddtocartService) { }

  ngOnInit() {
  }

  addToCart( event, data ) {
    this.addToCartService.addToCart(data);
  }

  showProducts() {
    if(this.addToCartService.cartItems.length) {
      alert(this.addToCartService.cartItems);
    } else {
      alert("Sorry You have no items")
    }
  }

}
