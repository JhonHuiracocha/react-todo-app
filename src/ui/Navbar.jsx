import { AddIcon, ChatIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const buttonSize = useBreakpointValue({ base: "sm", lg: "md" });
  const breakpoint = useBreakpointValue({ base: "md", lg: "xl" });

  return (
    <Box bg="teal" py={4}>
      <Container maxW="container.xl">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link to="/">
            <Text fontSize={breakpoint} fontWeight="medium" color="white">
              Todo <ChatIcon />
            </Text>
          </Link>

          <Link to="/new">
            <Button
              bg="white"
              color="teal"
              variant="solid"
              size={buttonSize}
              rightIcon={<AddIcon />}
            >
              Create
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
