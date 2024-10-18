import { Button, Container, Flex, Text } from "@chakra-ui/react";

export const Project = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <Flex justifyContent="space-between" alignItems="center" py={6}>
        <Text fontSize="5xl" fontWeight="bold">
          Project
        </Text>

        <Flex m={2}>
          <Button {...buttonStyle} mr={4}>
            팀원 관리
          </Button>
          <Button {...buttonStyle}>프로젝트 설정</Button>
        </Flex>
      </Flex>
    </Container>
  );
};

const buttonStyle = {
  size: "lg",
  px: 8,
  py: 4,
  height: "auto",
  backgroundColor: "#95A4FC",
  color: "white",
};
