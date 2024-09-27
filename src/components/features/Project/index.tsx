import { Button, Container, Flex, Text } from '@chakra-ui/react';

export const Project = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center" py={6}>
          <Text fontSize="4xl" fontWeight="bold">
            Project
          </Text>
          <Flex>
            <Button {...buttonStyle} mr={4}>
              팀원 관리
            </Button>
            <Button {...buttonStyle} mr={4}>
              프로젝트 설정
            </Button>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

const buttonStyle = {
  size: 'lg',
  px: 8,
  py: 4,
  height: 'auto',
  backgroundColor: '#95A4FC',
  color: 'white',
};
