import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <Box borderWidth="1px" borderColor="blue.500">
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center" py={6}>
          <Link to="/">
            <Text fontSize="4xl" fontWeight="bold">
              Seamless
            </Text>
          </Link>
          <Link to="/login">
            <Button size="lg" px={8} py={4} height="auto" variant="outline">
              로그인
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};
