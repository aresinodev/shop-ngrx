import { createSelector } from '@ngrx/store';

import { DataStateUtil } from 'src/app/util/data-state/data-state-util';
import { ProductsReducer } from '../reducers';
import { selectParamId } from './router.selectors';

const { selectAll } = ProductsReducer.productsAdapter.getSelectors();

export const { selectProductsState, selectEntities, selectDataState } = ProductsReducer.productsFeature;

export const selectLoading = createSelector(selectDataState, DataStateUtil.isLoadingOrRefreshing);
export const selectError = createSelector(selectDataState, DataStateUtil.getError);

export const selectProducts = createSelector(selectProductsState, selectAll);

export const selectSelectedId = createSelector(selectParamId, (id): number => Number(id));
export const selectSelectedProduct = createSelector(
    selectEntities,
    selectSelectedId,
    (entities, selectedId) => entities?.[selectedId]
);

export const selectProductsListPageViewModel = createSelector(
    selectProducts,
    selectLoading,
    selectError,
    (products, loading, error) => ({ products, loading: loading && products?.length === 0, error })
);

export const selectProductDetailPageViewModel = createSelector(
    selectSelectedProduct,
    selectLoading,
    selectError,
    (product, loading, error) => ({ product, loading: loading && !product, error })
);
