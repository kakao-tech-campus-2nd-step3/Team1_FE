import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { getTestToken } from "../../components/features/Project/TokenTest";
import type { SingleResultMemberResponseDTO } from "../generated/data-contracts";
import { projectApi } from "../projectApi";

type DeleteMemberParams = {
  projectId: number;
  memberId: number;
};

const deleteMember = async (projectId: number, memberId: number) => {
  const testToken = getTestToken();

  const response = await projectApi.deleteMember(projectId, memberId, {
    headers: {
      Authorization: `Bearer ${testToken}`,
    },
  });
  return response.data;
};

export const useDeleteMember = (): UseMutationResult<
  SingleResultMemberResponseDTO,
  AxiosError,
  DeleteMemberParams
> => {
  const queryClient = useQueryClient();

  return useMutation<
    SingleResultMemberResponseDTO,
    AxiosError,
    DeleteMemberParams
  >({
    mutationFn: async ({ projectId, memberId }) => {
      return deleteMember(projectId, memberId);
    },
    onSuccess: (data, { projectId }) => {
      queryClient.invalidateQueries({
        queryKey: ["projectMembers", projectId],
      });
      queryClient.invalidateQueries({
        queryKey: ["project", projectId],
      });
      queryClient.invalidateQueries({
        queryKey: ["teamProgress", projectId],
      });

      console.log("팀원 삭제 성공:", data);
    },
    onError: (error) => {
      console.error("팀원 삭제 오류:", error);
    },
  });
};
