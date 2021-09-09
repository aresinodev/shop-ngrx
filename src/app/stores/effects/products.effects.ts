import { Injectable } from '@angular/core';

import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ProductsService } from "src/app/services/products.service";
import * as ProductsActions from '../actions/products.actions';
import * as ProductsSelectors from '../selectors/products.selectors';

@Injectable()
export class ProductsEffects {
    constructor(private actions$: Actions,
                private store: Store,
                private productsSvc: ProductsService) {}

    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductsActions.enterProductsListPage),
            switchMap(() =>
                this.productsSvc.getProducts()
                .pipe(
                    map((products) => ProductsActions.loadProductsOK({ products })),
                    catchError(() => of(ProductsActions.loadProductsKO({ error: 'Load products error' })))
                )
            )
        )
    });

    loadProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductsActions.enterProductDetailsPage),
            concatLatestFrom(() => this.store.select(ProductsSelectors.selectSelectedId)),
            switchMap(([, selectedId]) =>
                this.productsSvc.getProduct(selectedId)
                .pipe(
                    map((product) => ProductsActions.loadProductOK({ product })),
                    catchError(() => of(ProductsActions.loadProductKO({ error: 'Load product error' })))
                )
            )
        )
    });
}
