import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";

export const TodoForm = () => {
  const breakpoint = useBreakpointValue({ base: "sm", lg: "md" });

  return (
    <>
      <Text textAlign="center" fontSize="lg" fontWeight="medium">
        Create Task
      </Text>

      <Formik
        initialValues={{
          title: "",
          description: "",
          states: "pending",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <FormControl my={4}>
              <FormLabel fontSize={breakpoint}>Enter a title:</FormLabel>
              <Input
                fontSize={breakpoint}
                type="text"
                name="title"
                placeholder="Enter a title"
                value={values.title}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel fontSize={breakpoint}>Enter a description:</FormLabel>
              <Input
                fontSize={breakpoint}
                type="text"
                name="description"
                placeholder="Enter a description"
                value={values.description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel fontSize={breakpoint}>select a state:</FormLabel>
              <Select
                placeholder="Select option"
                fontSize={breakpoint}
                name="states"
                onChange={handleChange}
              >
                <option value="pending">Pending</option>
                <option value="deleted">Deleted</option>
              </Select>
            </FormControl>

            <Button type="submit" colorScheme="teal" size={breakpoint}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
