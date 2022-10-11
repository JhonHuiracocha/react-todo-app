import { useEffect, useReducer } from "react";
import { createTask, deleteTaskById, getTaks, updateTaskById } from "../../api";
import { initialState, todoReducer, todoTypes } from "../";

export const useTodos = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const { data } = await getTaks();

    const action = {
      type: todoTypes.init,
      payload: data,
    };

    dispatch(action);
  };

  const onNewTodo = async (todo) => {
    const { data } = await createTask(todo);
    const { message, task } = data;

    const action = {
      type: todoTypes.add,
      payload: task,
    };

    dispatch(action);
  };

  const onUpdateTodo = async (id, todo) => {
    const { data } = await updateTaskById(id, todo);
    const { message } = data;

    const action = {
      type: todoTypes.update,
      payload: todo,
    };

    dispatch(action);
  };

  const onDeleteTodo = async (id) => {
    const { data } = await deleteTaskById(id);
    const { message } = data;

    const action = {
      type: todoTypes.delete,
      payload: id,
    };

    dispatch(action);
  };

  return {
    todos: state.todos || initialState.todos,
    onNewTodo,
    onUpdateTodo,
    onDeleteTodo,
  };
};
