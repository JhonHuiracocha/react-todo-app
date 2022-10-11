import { SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import { BreakpointContext, FilterTodo, SearchTodo, TodoList } from "../";

export const HomePage = () => {
  const { gridHomeColumns } = useContext(BreakpointContext);

  return (
    <>
      <SimpleGrid columns={gridHomeColumns} spacing={3} mt={3} mb={5}>
        <SearchTodo />
        <FilterTodo />
      </SimpleGrid>

      <TodoList />
    </>
  );
};
