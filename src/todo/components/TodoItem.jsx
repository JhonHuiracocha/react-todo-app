import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const stateColors = {
  pending: "teal",
  deleted: "red",
  completed: "linkedin",
};

const defaultStateColor = "teal";

export const TodoItem = ({ todo }) => {
  const breakpoint = useBreakpointValue({ base: "sm", lg: "md" });
  const badgeSize = useBreakpointValue({ base: ".70rem", lg: ".75rem" });

  const { id, title, description, states } = todo;

  return (
    <Box p={2} maxW="xl" borderWidth="1px" borderRadius="lg">
      <Badge
        borderRadius="full"
        px="2"
        colorScheme={`${stateColors[states] || defaultStateColor}`}
        fontSize={badgeSize}
      >
        {states}
      </Badge>

      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        noOfLines={1}
        fontSize={breakpoint}
      >
        {title}
      </Box>

      <Text fontSize={breakpoint}>{description}</Text>

      <Stack direction="row" spacing={4} py={2}>
        <Link to={`/todos/${id}`}>
          <Button
            leftIcon={<EditIcon />}
            colorScheme="teal"
            variant="outline"
            size={breakpoint}
          >
            Edit
          </Button>
        </Link>
        <Button
          rightIcon={<DeleteIcon />}
          colorScheme="teal"
          variant="solid"
          size={breakpoint}
        >
          Delete
        </Button>
      </Stack>
    </Box>
  );
};
