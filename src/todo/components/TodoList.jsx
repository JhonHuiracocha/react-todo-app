import { Alert, AlertIcon, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Link as ReachLink, useLocation } from "react-router-dom";
import { BreakpointContext, SearchContext, TodoContext } from "../";
import { TodoItem } from "./";

export const TodoList = () => {
  const { pathname } = useLocation();
  const { filter } = useContext(SearchContext);
  const { todos, getTodos } = useContext(TodoContext);
  const { fontSize, gridListColumns } = useContext(BreakpointContext);

  const loadTodos = async () => {
    await getTodos();
  };

  useEffect(() => {
    pathname === "/" && loadTodos();
  }, []);

  return (
    <>
      {!todos?.length ? (
        <Alert status="info" variant="subtle" fontSize={fontSize}>
          <AlertIcon />
          <Text>
            There are no todos, click
            <Link as={ReachLink} to="/new" px={1} fontWeight="bold">
              here
            </Link>
            to create one
          </Text>
        </Alert>
      ) : (
        <SimpleGrid columns={gridListColumns} spacing={3}>
          {filter === "all"
            ? todos?.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            : todos
                ?.filter((todo) => todo.states === filter)
                .map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </SimpleGrid>
      )}
    </>
  );
};
