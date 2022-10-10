import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getTaks } from "../../api";
import { TodoItem } from "./";

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const { data } = await getTaks();
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={3}>
      {tasks?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </SimpleGrid>
  );
};
