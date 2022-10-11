import { AddIcon, ChatIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BreakpointContext } from "../todo";

export const Navbar = () => {
  const { buttonSize, brandSize } = useContext(BreakpointContext);

  return (
    <Box bg="teal" py={4}>
      <Container maxW="container.xl">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link to="/">
            <Text fontSize={brandSize} fontWeight="medium" color="white">
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
