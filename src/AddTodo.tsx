import { useEffect } from 'react';
import { addTodo, useDispatch } from './store/store';

const AddTodo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addTodo('1'));
  }, []);

  return <div>AddTodo</div>;
};
export default AddTodo;
