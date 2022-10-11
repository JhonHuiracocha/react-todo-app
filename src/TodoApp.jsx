import { ChakraProvider } from "@chakra-ui/react";
import { AppRouter } from "./router";
import { BreakpointProvider, SearchProvider, TodoProvider } from "./todo";

export const TodoApp = () => {
  return (
    <ChakraProvider>
      <TodoProvider>
        <BreakpointProvider>
          <SearchProvider>
            <AppRouter />
          </SearchProvider>
        </BreakpointProvider>
      </TodoProvider>
    </ChakraProvider>
  );
};
