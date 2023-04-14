import { StoreUtils } from './types';

export const generateActionCreator = <S extends any>() => {
  return <R extends any, A extends any[]>(
      fn: (utils: StoreUtils<S>, ...args: A) => R
    ) =>
    (...payload: A) =>
    (utils: StoreUtils<S>) =>
      fn(utils, ...payload);
};
