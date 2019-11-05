import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductLayoutComponent } from './product-layout/product-layout.component';



@NgModule({
  declarations: [ProductsListingComponent, ProductDescriptionComponent, ProductLayoutComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductsModule { }
