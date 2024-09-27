import { Avatar, Flex, Text } from '@chakra-ui/react';

export const UserProfile = () => {
  return (
    <Flex alignContent="center" justifyContent="center">
      <Avatar src="https://bit.ly/broken-link" size="sm" margin={2} />
      <Text fontSize="xl" fontWeight="bold" alignContent="center">
        유저명
      </Text>
    </Flex>
  );
};
