import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BreakpointContext, TodoContext } from "../";

const STATE_COLORS = {
  pending: "teal",
  deleted: "red",
  completed: "linkedin",
};

const DEFAULT_STATE_COLOR = "teal";

export const TodoItem = ({ todo }) => {
  const { onDeleteTodo } = useContext(TodoContext);
  const { badgeSize, buttonSize, fontSize } = useContext(BreakpointContext);

  return (
    <Box p={2} maxW="xl" borderWidth="1px" borderRadius="lg">
      <Badge
        borderRadius="full"
        px="2"
        colorScheme={`${STATE_COLORS[todo.states] || DEFAULT_STATE_COLOR}`}
        fontSize={badgeSize}
      >
        {todo.states}
      </Badge>

      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        noOfLines={1}
        fontSize={fontSize}
      >
        {todo.title}
      </Box>

      <Text fontSize={fontSize}>{todo.description}</Text>

      <Stack direction="row" spacing={4} py={2}>
        <Link to={`/todos/${todo.id}`}>
          <Button
            leftIcon={<EditIcon />}
            colorScheme="teal"
            variant="outline"
            size={buttonSize}
          >
            Edit
          </Button>
        </Link>
        <Button
          rightIcon={<DeleteIcon />}
          colorScheme="teal"
          variant="solid"
          size={buttonSize}
          onClick={() => onDeleteTodo(todo.id)}
        >
          Delete
        </Button>
      </Stack>
    </Box>
  );
};
