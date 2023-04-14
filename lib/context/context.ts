import { createStore } from 'zustand';
import {
  createContext as createReactContext,
  useContext as useReactContext,
} from 'react';
import { StoreApi } from 'zustand';
import { createContextProvider } from './context.provider';
import { generateSelector } from './selector';
import { generateActionCreator } from '../action';
import { generateDispatch } from '../dispatch';

export const generateContext = <Store extends any>(
  storeCreator: () => ReturnType<typeof createStore>
) => {
  const storeContext = createReactContext<StoreApi<Store> | null>(null);

  const useStoreContext = () => {
    const storeInstance = useReactContext(storeContext);
    if (!storeInstance) throw new Error("Store didn't initialized");

    return storeInstance;
  };

  const StoreContextProvider = createContextProvider(
    storeCreator,
    storeContext
  );

  const useStoreSelector = generateSelector(useStoreContext);

  const createAction = generateActionCreator<Store>();

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
