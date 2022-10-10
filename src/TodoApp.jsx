import { ChakraProvider } from "@chakra-ui/react";
import { AppRouter } from "./router";

export const TodoApp = () => {
  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  );
};
