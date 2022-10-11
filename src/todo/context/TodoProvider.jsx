import { TodoContext } from "./";
import { useTodos } from "../";

export const TodoProvider = ({ children }) => {
  const {
    todos,
    getTodos,
    setSearchedTodos,
    onNewTodo,
    onUpdateTodo,
    onDeleteTodo,
  } = useTodos();

  return (
    <TodoContext.Provider
      value={{
        todos,
        getTodos,
        setSearchedTodos,
        onNewTodo,
        onUpdateTodo,
        onDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
