import { Box, Button, Container, Flex, Modal, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import { LoginModal } from "../../common/modal/Login";

export const Header: React.FC = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <Box borderWidth="1px" borderColor="blue.500">
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center" py={6}>
          <Link to="/">
            <Text fontSize="4xl" fontWeight="bold">
              Seamless
            </Text>
          </Link>
          <Button
            onClick={onOpen}
            size="lg"
            px={8}
            py={4}
            height="auto"
            variant="outline"
          >
            로그인
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <LoginModal />
          </Modal>
        </Flex>
      </Container>
    </Box>
  );
};
