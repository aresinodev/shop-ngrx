import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Product } from 'src/app/shared/models';
import { DataState, LoadingState } from 'src/app/util/data-state/data-state.models';
import { ProductsActions } from '../actions';

export interface ProductsState extends EntityState<Product> {
    dataState: DataState;
}

export const productsAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
    sortComparer: (e1, e2) => e1?.id - e2?.id,
});

export const initialState: ProductsState = productsAdapter.getInitialState({
    dataState: LoadingState.init
});

export const productsFeature = createFeature({
    name: 'products',
    reducer: createReducer(initialState,
        on(
            ProductsActions.enterProductsListPage,
            ProductsActions.enterProductDetailsPage,
            (state): ProductsState => ({ ...state, dataState: LoadingState.loading })
        ),
        on(
            ProductsActions.loadProductsOK,
            (state, { products }) => productsAdapter.setAll(products as Product[], { ...state, dataState: LoadingState.loaded })
        ),
        on(
            ProductsActions.loadProductOK,
            (state, { product }) => productsAdapter.setOne(product, { ...state, dataState: LoadingState.loaded })
        ),
        on(
            ProductsActions.loadProductsKO,
            ProductsActions.loadProductKO,
            (state, { error }): ProductsState => ({ ...state, dataState: { error }})
        )
    )
});
