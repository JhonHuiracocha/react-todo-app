import { Route, Routes } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { TodoRoutes } from "../todo";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Container maxW="container.xl" my={4}>
        <Routes>
          <Route path="/*" element={<TodoRoutes />} />
        </Routes>
      </Container>
    </>
  );
};
