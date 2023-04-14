import { StoreApi } from 'zustand';
import {
  createContext as createReactContext,
  useContext as useReactContext,
} from 'react';
import { createContextProvider } from './context.provider';
import { generateSelector } from './selector';
import { generateActionCreator } from './action';
import { generateDispatch } from './dispatch';

export const generateToolkit = <
  Store extends any,
  StoreWrapper extends StoreApi<Store> = StoreApi<Store>
>(
  storeCreator: () => StoreWrapper
) => {
  const storeContext = createReactContext<StoreWrapper | null>(null);

  const useStoreContext = () => {
    const storeInstance = useReactContext(storeContext);
    if (!storeInstance) throw new Error("Store didn't initialized");

    return storeInstance;
  };

  const StoreContextProvider = createContextProvider<Store, StoreWrapper>(
    storeCreator,
    storeContext
  );

  const useStoreSelector = generateSelector<Store, StoreWrapper>(
    useStoreContext
  );

  const createAction = generateActionCreator<Store, StoreWrapper>();

  const useDispatch = generateDispatch(useStoreContext);

  return {
    storeContext,
    StoreContextProvider,
    useStoreContext,
    useStoreSelector,
    createAction,
    useDispatch,
  };
};
