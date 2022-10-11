import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useContext } from "react";
import { useDebouncedCallback } from "use-debounce";
import { BreakpointContext, SearchContext } from "../";

export const SearchTodo = () => {
  const { setSearch } = useContext(SearchContext);
  const { fontSize } = useContext(BreakpointContext);

  const debounced = useDebouncedCallback((value) => {
    setSearch(value);
  }, 1000);

  return (
    <Formik
      initialValues={{
        name: "",
      }}
      onSubmit={(values) => {
        const { name } = values;

        if (!name) return;

        setSearch(name);
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
              placeholder="Enter name"
              value={values.name}
              onChange={(e) => {
                handleChange(e);
                debounced(e.target.value);
              }}
            />
          </FormControl>
        </Form>
      )}
    </Formik>
  );
};
