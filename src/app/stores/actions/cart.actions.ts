import { createAction, props } from '@ngrx/store';

export const enterCartPage = createAction('[Cart Page] Enter Page');
export const removeProduct = createAction('[Cart Page] Remove product', props<{ productId: number }>());
export const changeProductQuantity = createAction('[Cart Page] Change product quantity', props<{ productId: number; quantity:number }>());
