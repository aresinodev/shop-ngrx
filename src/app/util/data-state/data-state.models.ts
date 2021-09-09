export enum LoadingState {
    init = 'init',
    loading = 'loading',
    refreshing = 'refreshing',
    prefetching = 'prefetching',
    loaded = 'loaded'
}

export interface ErrorState {
    error: string;
}

export type DataState = LoadingState | ErrorState;
