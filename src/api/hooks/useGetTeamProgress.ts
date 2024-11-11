import { useQuery } from "@tanstack/react-query";

import { getTestToken } from "../../components/features/Project/TokenTest";
import type { PageResultMemberProgress } from "../generated/data-contracts";
import { projectApi } from "../projectApi";

export const getTeamProgress = async (
  projectId: number,
  page: number,
  size: number,
  sort: string,
  role?: string
): Promise<PageResultMemberProgress> => {
  // TODO: any 어떻게해결하지..
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: any = {
    page,
    size,
    sort,
    role,
  };
  const testToken = getTestToken();
  const response = await projectApi.getMemberProgress(projectId, query, {
    headers: {
      Authorization: `Bearer ${testToken}`, // Authorization 헤더에 토큰 추가
    },
  });

  return response.data;
};

export const useGetTeamProgress = (
  projectId: number,
  page: number,
  size: number,
  sort: string,
  role?: string
) =>
  useQuery<PageResultMemberProgress, Error>({
    queryKey: ["teamProgress", projectId, page, size, sort, role],
    queryFn: () => getTeamProgress(projectId, page, size, sort, role),
    enabled: !!projectId,
  });

// 페이지네이션 반환 오류 => 보류
// export const useGetTeamProgress = (
//   projectId: number,
//   size: number,
//   sort: string,
//   role?: string
// ) =>
//   useInfiniteQuery<PageResultMemberProgress, Error>({
//     queryKey: ["teamProgress", projectId, size, sort, role],
//     queryFn: ({ page = 0 }) => getTeamProgress(projectId, page, size, sort, role),
//     initialPageParam: 0,
//     getNextPageParam: (lastPage) => {
//       return lastPage.hasNext ? lastPage.nextPage : undefined;
//     },
//     enabled: !!projectId,
//   });
