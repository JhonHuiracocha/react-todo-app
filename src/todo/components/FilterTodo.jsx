import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { BreakpointContext, SearchContext } from "../";

export const FilterTodo = () => {
  const selectRef = useRef();
  const { setFilter } = useContext(SearchContext);
  const { fontSize } = useContext(BreakpointContext);

  const onChangeFilter = ({ target }) => {
    const { value } = target;
    value ? setFilter(value) : setFilter("all");
  };

  const onClick = () => {
    setFilter("all");
    selectRef.current.selectedIndex = 0;
  };

  return (
    <Stack direction="column">
      <Text fontWeight="medium" fontSize={fontSize}>
        Select filter:
      </Text>
      <Flex gap={3}>
        <Select
          ref={selectRef}
          fontSize={fontSize}
          onChange={onChangeFilter}
          defaultValue="default"
        >
          <option value="default" hidden>
            Select an option
          </option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </Select>
        <Button colorScheme="teal" onClick={onClick}>
          <DeleteIcon />
        </Button>
      </Flex>
    </Stack>
  );
};
