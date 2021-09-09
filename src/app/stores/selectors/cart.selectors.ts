import { createSelector } from '@ngrx/store';

import { ProductCart } from 'src/app/shared/models';
import { CartReducer } from '../reducers';

const { selectAll } = CartReducer.cartAdapter.getSelectors();

export const { selectCartState, selectEntities } = CartReducer.cartFeature;

export const selectAllProducts = createSelector(selectCartState, selectAll);
export const selectProducts = createSelector(selectAllProducts, (products: ProductCart[]) =>
    products?.filter(({ quantity }) => quantity > 0)
);

export const selectTotalProducts = createSelector(
    selectProducts,
    (products: ProductCart[]) => products?.reduce((total, currentProduct) => total + currentProduct.quantity, 0) ?? 0
);

export const selectItemsCart = createSelector(
    selectProducts,
    (products: ProductCart[]) => products?.length ?? 0
)

export const selectCartPageViewModel = createSelector(selectProducts, selectTotalProducts, selectItemsCart, (products, items, total) => ({
    products,
    items,
    total
}));
