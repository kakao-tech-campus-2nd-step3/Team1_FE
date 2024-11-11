import { Avatar, Flex, HStack, Text } from "@chakra-ui/react";

import type { MemberResponseDTO } from "../../../../api/generated/data-contracts";

export const MemberProfile = (member: MemberResponseDTO) => {
  const { name, role, email } = member;

  return (
    <Flex alignItems="center">
      <Avatar name={name} size="md" mr={3} />
      <Flex flexDir="column">
        <HStack gap={1}>
          <Text fontSize="md" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="sm" color="gray">
            {role}
          </Text>
        </HStack>
        <Text fontSize="sm" color="gray">
          {email}
        </Text>
      </Flex>
    </Flex>
  );
};
