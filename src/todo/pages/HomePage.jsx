import { SimpleGrid } from "@chakra-ui/react";
import { FilterTodo, SearchTodo, TodoList } from "../components";

export const HomePage = () => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} mt={3} mb={5}>
        <SearchTodo />
        <FilterTodo />
      </SimpleGrid>

      <TodoList />
    </>
  );
};
