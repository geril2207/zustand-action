import { useStoreSelector } from './store/store';

const Todos = () => {
  const { todos } = useStoreSelector((state) => state);
  return <div>{todos.map((todo) => todo.title)}</div>;
};
export default Todos;
