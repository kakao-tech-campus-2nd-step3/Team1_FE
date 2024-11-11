import { useQuery } from "@tanstack/react-query";

import { getTestToken } from "../../components/features/Project/TokenTest";
import type { GetMemberListData } from "../generated/data-contracts";
import { projectApi } from "../projectApi";

export const getProjectMembers = async (
  projectId: number,
  page: number,
  size: number,
  sort: string,
  role?: string
): Promise<GetMemberListData> => {
  // TODO: any 어떻게해결하지..
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: any = {
    page,
    size,
    sort,
    role,
  };
  const testToken = getTestToken();
  const response = await projectApi.getMemberList(projectId, query, {
    headers: {
      Authorization: `Bearer ${testToken}`,
    },
  });

  return response.data;
};

export const useGetProjectMembers = (
  projectId: number,
  page: number,
  size: number,
  sort: string,
  role?: string
) =>
  useQuery<GetMemberListData, Error>({
    queryKey: ["projectMembers", projectId, page, size, sort, role],
    queryFn: () => getProjectMembers(projectId, page, size, sort, role),
    enabled: !!projectId,
  });
