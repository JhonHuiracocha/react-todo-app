import { Select, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

export const FilterTodo = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const breakpoint = useBreakpointValue({ base: "sm", lg: "md" });

  const onChangeFilter = ({ target }) => {
    setSelectedFilter(target.value);
  };

  return (
    <Stack direction="column">
      <Text fontWeight="medium" fontSize={breakpoint}>
        Select filter:
      </Text>
      <Select
        placeholder="Select option"
        fontSize={breakpoint}
        defaultValue={selectedFilter}
        onChange={onChangeFilter}
      >
        <option value="pending">Pending</option>
        <option value="deleted">Deleted</option>
      </Select>
    </Stack>
  );
};
