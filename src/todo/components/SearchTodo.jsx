import {
  FormControl,
  FormLabel,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";

export const SearchTodo = () => {
  const breakpoint = useBreakpointValue({ base: "sm", lg: "md" });

  return (
    <Formik
      initialValues={{
        name: "",
      }}
      onSubmit={(values) => {
        const { name } = values;

        if (!name) return;

        console.log(values);
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormControl>
            <FormLabel fontSize={breakpoint}>Search todo:</FormLabel>
            <Input
              fontSize={breakpoint}
              type="text"
              name="name"
              placeholder="Enter name"
              value={values.name}
              onChange={handleChange}
            />
          </FormControl>
        </Form>
      )}
    </Formik>
  );
};
