import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './component/list-product/list-product.component';
import { LandingPageRoutingModule } from './landing-product-routing.module';



@NgModule({
  declarations: [
    ListProductComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule

  ]
})
export class LandingPageModule { }
