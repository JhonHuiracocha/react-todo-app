import { TodoContext } from "./";
import { useTodos } from "../";

export const TodoProvider = ({ children }) => {
  const { todos, onNewTodo, onUpdateTodo, onDeleteTodo } = useTodos();

  return (
    <TodoContext.Provider
      value={{ todos, onNewTodo, onUpdateTodo, onDeleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
