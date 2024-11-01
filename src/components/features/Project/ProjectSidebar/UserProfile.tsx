import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import type { UserDetails } from "@/api/generated/data-contracts";

import { User } from "../../../../api/generated/User";

export const UserProfile = () => {
  const [userData, setUserData] = useState<UserDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userApi = new User();
      try {
        const response = await userApi.getUser();
        setUserData(response.data.resultData || null);
      } catch (err) {
        setError("Failed to fetch project data");
      }
    };

    fetchUserData();
  }, []);

  if (error) <div>error...</div>;
  if (!userData) return <div>Loading...</div>;

  return (
    <Flex alignContent="center">
      <Avatar src={userData.picture} size="md" margin={2} />
      <Flex flexDir="column" justifyContent="center">
        <Text fontSize="xl" fontWeight="bold">
          {userData.username}
        </Text>
        <Text fontSize="sm" color="gray">
          {userData.role}
        </Text>
      </Flex>
    </Flex>
  );
};
