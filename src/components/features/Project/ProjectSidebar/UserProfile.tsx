import { Avatar, Flex, Text } from "@chakra-ui/react";

import { useGetUserData } from "../../../../api/hooks/useGetUserdata";

export const UserProfile = () => {
  const { data, error, isLoading } = useGetUserData();

  if (error) <div>error...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Flex alignContent="center">
      <Avatar src={data?.resultData?.picture} size="md" margin={2} />
      <Flex flexDir="column" justifyContent="center">
        <Text fontSize="xl" fontWeight="bold">
          {data?.resultData?.username}
        </Text>
        <Text fontSize="sm" color="gray">
          {data?.resultData?.role}
        </Text>
      </Flex>
    </Flex>
  );
};
