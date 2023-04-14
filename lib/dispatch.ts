import { StoreApi } from 'zustand';
import { ActionFn } from './types';

export const generateDispatch =
  <Store extends any, StoreWrapper extends StoreApi<Store>>(
    storeGetter: () => StoreApi<Store>
  ) =>
  () => {
    const store = storeGetter();

    return <T extends any>(
      fn: ReturnType<ActionFn<T, Store, StoreWrapper>>
    ): ReturnType<typeof fn> =>
      fn({
        store,
        get: store.getState,
        set: store.setState,
      });
  };
