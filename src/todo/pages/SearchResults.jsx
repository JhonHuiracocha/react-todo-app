import { useContext, useEffect, useState } from "react";
import { Link as ReachLink, useLocation } from "react-router-dom";
import { Alert, AlertIcon, Box, Link, Text } from "@chakra-ui/react";
import queryString from "query-string";
import { getTasksByQuery } from "../../api";
import { BreakpointContext, TodoList, TodoContext } from "../";

export const SearchResults = () => {
  const { search } = useLocation();
  const [isEmpty, setIsEmpty] = useState(true);
  const { setSearchedTodos } = useContext(TodoContext);
  const { fontSize } = useContext(BreakpointContext);

  const { q = "" } = queryString.parse(search);

  const getTodos = async () => {
    const { data } = await getTasksByQuery(q);
    setIsEmpty(!data.length);
    setSearchedTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      {isEmpty ? (
        <Alert status="info" variant="subtle" fontSize={fontSize}>
          <AlertIcon />
          <Text>
            There are no todos, click
            <Link as={ReachLink} to="/" px={1} fontWeight="bold">
              here
            </Link>
            to return to the home page
          </Text>
        </Alert>
      ) : (
        <Box>
          <Text fontWeight="medium" fontSize={fontSize} mb={3}>
            Results:
          </Text>
          <TodoList />
        </Box>
      )}
    </>
  );
};
