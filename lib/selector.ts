import { useStore as useZustandStore } from 'zustand';
import { StoreApi } from 'zustand';
import { ExtractState } from './types/index';

export const generateSelector = <
  S extends any,
  StoreWrapper extends StoreApi<S>
>(
  contextGetter: () => StoreWrapper
) => {
  const useStoreSelector = <Slice = ExtractState<S, StoreWrapper>>(
    selector: (state: S) => Slice,
    equalityFn?: (a: Slice, b: Slice) => boolean
  ) => {
    const store = contextGetter();
    return useZustandStore(store, selector, equalityFn);
  };

  return useStoreSelector;
};
