import { useQuery } from "@tanstack/react-query";

import type { GetUserData } from "../../api/generated/data-contracts";
import { userApi } from "../../api/userApi";
import { getTestToken } from "../../components/features/Project/TokenTest";

const getUserData = async (): Promise<GetUserData | null> => {
  try {
    const testToken = getTestToken();
    const response = await userApi.getUser({
      headers: {
        Authorization: `Bearer ${testToken}`,
      },
    });

    if (!response.data || !response.data.resultData) {
      throw new Error("User data not found");
    }

    return response.data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch user data"
    );
  }
};

export const useGetUserData = () => {
  return useQuery<GetUserData | null, Error>({
    queryKey: ["userData"],
    queryFn: getUserData,
  });
};
