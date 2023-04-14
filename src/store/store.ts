import { StoreApi, createStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { generateToolkit } from '../../lib/context';
import { WithImmer } from '../../lib/types/immer';

export interface Todo {
  id: string;
  title: string;
}

export interface Store {
  todos: Todo[];
}
const setupStore = () =>
  createStore<Store>()(immer(() => ({ todos: [] as Todo[] })));

export const {
  StoreContextProvider,
  createAction,
  storeContext,
  useDispatch,
  useStoreContext,
  useStoreSelector,
} = generateToolkit<Store, WithImmer<StoreApi<Store>>>(setupStore);

export const addTodo = createAction(({ set }, title: string) => {
  const todo: Todo = {
    title,
    id: crypto.randomUUID(),
  };
  set((draft) => {
    draft.todos.push(todo);
  });
});

const set = () => null;
const get = (): Store => ({
  todos: [],
});

const value = addTodo('s')({ set, get });
