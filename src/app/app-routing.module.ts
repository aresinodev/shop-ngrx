import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartContainerComponent } from './features/cart/cart-container/cart-container.component';
import { DetailContainerComponent } from './features/product-detail/detail-container/detail-container.component';
import { ListContainerComponent } from './features/products-list/list-container/list-container.component';

const routes: Routes = [
  {
    path: '', component: ListContainerComponent
  },
  {
    path: 'cart', component: CartContainerComponent
  },
  {
    path: ':id', component: DetailContainerComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
