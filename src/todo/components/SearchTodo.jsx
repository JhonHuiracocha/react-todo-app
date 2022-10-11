import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BreakpointContext } from "../";

export const SearchTodo = () => {
  const navigate = useNavigate();
  const { fontSize } = useContext(BreakpointContext);

  return (
    <Formik
      initialValues={{
        name: "",
      }}
      onSubmit={(values) => {
        const { name } = values;

        if (!name) return;

        navigate(`/search?q=${name}`);
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormControl>
            <FormLabel fontSize={fontSize}>Search todo:</FormLabel>
            <Input
              fontSize={fontSize}
              type="text"
              name="name"
              placeholder="Enter a title"
              value={values.name}
              onChange={handleChange}
            />
          </FormControl>
        </Form>
      )}
    </Formik>
  );
};
