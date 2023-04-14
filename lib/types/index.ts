import { StoreApi } from 'zustand';

export type StoreUtils<T extends any> = {
  get: StoreApi<T>['getState'];
  set: StoreApi<T>['setState'];
};

export type ActionFn<T extends any, S extends any, A extends any[] = any> = (
  utils: StoreUtils<S>
) => (...args: A) => T;

export type ExtractState<S> = StoreApi<S> extends { getState: () => infer T }
  ? T
  : never;
