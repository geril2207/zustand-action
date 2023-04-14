import { Context, FC, PropsWithChildren, useRef } from 'react';
import { StoreApi } from 'zustand';

export const createContextProvider =
  <T extends any, S extends StoreApi<T>>(
    createStore: () => S,
    context: Context<S | null>
  ): FC<PropsWithChildren> =>
  ({ children }) => {
    const storeRef = useRef<S | null>();
    if (!storeRef.current) storeRef.current = createStore();
    return (
      <context.Provider value={storeRef.current}>{children}</context.Provider>
    );
  };
