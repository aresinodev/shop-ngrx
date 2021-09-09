import { DataState, ErrorState, LoadingState } from './data-state.models';

export class DataStateUtil {
    static isLoading = (dataState: DataState): boolean => dataState === LoadingState.loading;
    static isLoadingOrRefreshing = (dataState: DataState): boolean => DataStateUtil.isLoading(dataState) || dataState === LoadingState.refreshing;
    static getError = (dataState: DataState): string => (dataState as ErrorState).error;
    static isError = (dataState: DataState): boolean => !!DataStateUtil.getError(dataState);
}
