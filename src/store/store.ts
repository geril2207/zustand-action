import { createStore } from 'zustand';
import { generateContext } from '../../lib/context/context';
export interface Todo {
  id: string;
  title: string;
}

export interface Store {
  todos: Todo[];
}
const setupStore = () => createStore<Store>(() => ({ todos: [] }));

export const {
  StoreContextProvider,
  createAction,
  storeContext,
  useDispatch,
  useStoreContext,
  useStoreSelector,
  // @ts-ignore
} = generateContext<Store>(setupStore);

export const addTodo = createAction(({ set }, title: string) => {
  const todo: Todo = {
    title,
    id: crypto.randomUUID(),
  };

  set((prev) => ({
    todos: [...prev.todos, todo],
  }));
});
