import { RouterState } from '@angular/router';

import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { CartReducer, ProductsReducer } from './reducers';


export interface AppState {
    products: ProductsReducer.ProductsState,
    cart: CartReducer.CartState,
    router: RouterState
}

export const appReducers: ActionReducerMap<AppState> = {
    products: ProductsReducer.productsFeature.reducer,
    cart: CartReducer.cartFeature.reducer,
    router: routerReducer
}
