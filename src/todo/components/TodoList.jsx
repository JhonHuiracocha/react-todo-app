import { SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import { TodoItem } from "./";
import { BreakpointContext, SearchContext, TodoContext } from "../";

export const TodoList = () => {
  const { todos } = useContext(TodoContext);
  const { filter } = useContext(SearchContext);
  const { gridListColumns } = useContext(BreakpointContext);

  return (
    <SimpleGrid columns={gridListColumns} spacing={3}>
      {filter === "all"
        ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : todos
            ?.filter((todo) => todo.states === filter)
            .map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </SimpleGrid>
  );
};
