import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { ProductCart } from 'src/app/shared/models';
import * as CartActions from '../actions/cart.actions';
import { ProductsActions } from '../actions';

export type CartState = EntityState<ProductCart>;

export const cartAdapter: EntityAdapter<ProductCart> = createEntityAdapter<ProductCart>({
    sortComparer: (e1, e2) => e1?.id - e2?.id
});

export const initialState: CartState = cartAdapter.getInitialState();

export const cartFeature = createFeature({
    name: 'cart',
    reducer: createReducer(initialState,
        on(ProductsActions.addProductToCart, (state, { product }) =>
            cartAdapter.upsertOne({ ...product, quantity: (state.entities[product.id]?.quantity ?? 0) + 1}, state)
        ),
        on(CartActions.removeProduct, (state, { productId }) => cartAdapter.removeOne(productId, state)),
        on(CartActions.changeProductQuantity, (state, { productId, quantity }) =>
            cartAdapter.updateOne({ id: productId, changes: { quantity } }, state)
        )
    )
});
