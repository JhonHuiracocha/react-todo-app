import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTaskById } from "../../api";
import { BreakpointContext, TodoContext } from "../";

const initialTodo = {
  title: "",
  description: "",
  states: "pending",
};

export const TodoForm = () => {
  const toast = useToast();
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(initialTodo);
  const { onNewTodo, onUpdateTodo } = useContext(TodoContext);
  const { buttonSize, fontSize } = useContext(BreakpointContext);

  const getTodo = async (id) => {
    const { data } = await getTaskById(id);
    setTodo(data);
  };

  useEffect(() => {
    id ? getTodo(id) : setTodo(initialTodo);
  }, []);

  return (
    <>
      <Text textAlign="center" fontSize="lg" fontWeight="medium">
        {id ? "Edit Task" : "Create Task"}
      </Text>

      <Formik
        initialValues={todo}
        enableReinitialize={true}
        onSubmit={(values) => {
          const newTodo = values;

          if (!newTodo.title) {
            return;
          }

          if (id) {
            onUpdateTodo(id, newTodo);

            toast({
              title: "Todo updated",
              description: "Todo has been updated successfully.",
              status: "info",
              duration: 3000,
              isClosable: true,
            });
          } else {
            onNewTodo(newTodo);

            toast({
              title: "Todo created",
              description: "Todo has been created successfully.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }

          setTodo(initialTodo);
          navigate("/", { replace: true });
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <FormControl my={4}>
              <FormLabel fontSize={fontSize}>
                Enter a title (
                <Text display="inline" color="teal">
                  *
                </Text>
                )
              </FormLabel>
              <Input
                fontSize={fontSize}
                type="text"
                name="title"
                placeholder="Enter a title"
                value={values.title}
                onChange={handleChange}
                isRequired
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel fontSize={fontSize}>Enter a description:</FormLabel>
              <Input
                fontSize={fontSize}
                type="text"
                name="description"
                placeholder="Enter a description"
                value={values.description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel fontSize={fontSize}>select a state:</FormLabel>
              <Select
                fontSize={fontSize}
                name="states"
                onChange={handleChange}
                defaultValue={`${todo.title === "" ? "default" : todo.states}`}
              >
                <option value="default" hidden>
                  Select an option
                </option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </Select>
            </FormControl>

            <Button w="full" type="submit" colorScheme="teal" size={buttonSize}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
