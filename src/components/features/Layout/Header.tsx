import { Box, Button, Container, Flex, Modal, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../../provider/Auth";
import { RouterPath } from "../../../routes/path";
import { LoginModal } from "../../common/modal/Login";

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      logout();
      navigate(RouterPath.root);
    } else {
      onOpen();
    }
  };

  return (
    <Box borderWidth="1px" borderColor="blue.500">
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center" py={6}>
          <Link to={user ? RouterPath.projectList : RouterPath.root}>
            <Text fontSize="4xl" fontWeight="bold">
              Seamless
            </Text>
          </Link>
          <Button
            onClick={handleAuthAction}
            size="lg"
            px={8}
            py={4}
            height="auto"
            variant="outline"
          >
            {user ? "로그아웃" : "로그인"}
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <LoginModal onClose={onClose} />
          </Modal>
        </Flex>
      </Container>
    </Box>
  );
};
