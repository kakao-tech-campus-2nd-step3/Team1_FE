import { Avatar, Flex, Text } from '@chakra-ui/react';

export const UserProfile = () => {
  return (
    <Flex alignContent="center">
      <Avatar src="" size="md" margin={2} />
      <Flex flexDir="column" justifyContent="center">
        <Text fontSize="xl" fontWeight="bold">
          유저명
        </Text>
        <Text fontSize="sm" color="gray">
          개발자
        </Text>
      </Flex>
    </Flex>
  );
};
