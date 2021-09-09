import { createAction, props } from '@ngrx/store';

import { Product, ProductCart } from 'src/app/shared/models';

export const enterProductsListPage = createAction('[Products List Page] Enter Page');
export const enterProductDetailsPage = createAction('[Product Details Page] Enter Page');

export const loadProductsOK = createAction('[Products API] Load products OK', props<{ products: Partial<Product>[] }>());
export const loadProductsKO = createAction('[Products API] Load products KO', props<{ error: string }>());
export const loadProduct = createAction('[Product detail] Load product detail', props<{ id: number }>());
export const loadProductOK = createAction('[Products API] Load product detail OK', props<{ product: Product }>());
export const loadProductKO = createAction('[Products API] Load product detail KO', props<{ error: string }>());
export const addProductToCart = createAction('[Product detail Page] Add product to cart', props<{ product: ProductCart }>());
