import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, SearchResults, TodoForm } from "../pages";

export const TodoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<TodoForm />} />
      <Route path="todos/:id" element={<TodoForm />} />
      <Route path="search" element={<SearchResults />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
