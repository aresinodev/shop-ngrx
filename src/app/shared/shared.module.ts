import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProductCardComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
