import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductLayoutComponent } from './product-layout/product-layout.component';
import { ProductsListingComponent } from './products-listing/products-listing.component';


const routes: Routes = [
  { 
    path: '',
    component: ProductLayoutComponent,
    children:[
      {
        path:'',
        component:ProductsListingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
