import { StoreApi } from 'zustand';

export type StoreUtils<T extends any, StoreWrapper extends StoreApi<T>> = {
  get: StoreWrapper['getState'];
  set: StoreWrapper['setState'];
};

export type ActionFn<
  T extends any,
  S extends any,
  StoreWrapper extends StoreApi<S>,
  A extends any[] = any
> = (utils: StoreUtils<S, StoreWrapper>) => (...args: A) => T;

export type ExtractState<
  S,
  StoreWrapper extends StoreApi<S>
> = StoreWrapper extends { getState: () => infer T } ? T : never;

export * from './immer';
