import AddTodo from './AddTodo';
import Todos from './Todos';
import { StoreContextProvider } from './store/store';

export const App = () => {
  return (
    <StoreContextProvider>
      <Todos />
      <AddTodo />
    </StoreContextProvider>
  );
};
