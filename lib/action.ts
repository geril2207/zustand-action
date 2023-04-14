import { StoreApi } from 'zustand';
import { StoreUtils } from './types';

export const generateActionCreator = <
  S extends any,
  StoreWrapper extends StoreApi<S>
>() => {
  return <R extends any, A extends any[]>(
      fn: (utils: StoreUtils<S, StoreWrapper>, ...args: A) => R
    ) =>
    (...payload: A) =>
    (utils: StoreUtils<S, StoreWrapper>) =>
      fn(utils, ...payload);
};
