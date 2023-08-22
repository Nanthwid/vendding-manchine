import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './component/list-product/list-product.component';
import { LandingPageRoutingModule } from './landing-product-routing.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { DataViewLayoutOptions, DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { ProductService } from 'src/app/services/productservice';
@NgModule({
  declarations: [
    ListProductComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FormsModule,
    ButtonModule,
    BrowserModule,
    InputTextModule,
    CardModule,
    TableModule,
    DataViewModule,
    TagModule,
    PasswordModule,
    // DataViewLayoutOptions,
    CalendarModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [ ProductService ]
})
export class LandingPageModule { }
