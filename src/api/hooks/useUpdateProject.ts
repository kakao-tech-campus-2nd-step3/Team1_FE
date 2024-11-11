import { useMutation, useQueryClient } from "@tanstack/react-query";

import type {
  ProjectUpdate,
  SingleResultProjectDetail,
} from "../../api/generated/data-contracts";
import { getTestToken } from "../../components/features/Project/TokenTest";
import { projectApi } from "../projectApi";

export const useUpdateProject = (projectId: number | null) => {
  const queryClient = useQueryClient();
  return useMutation<SingleResultProjectDetail, Error, ProjectUpdate>({
    mutationFn: async (data: ProjectUpdate) => {
      if (projectId === null) {
        throw new Error("Invalid project ID");
      }
      const updateData = data;

      const testToken = getTestToken();

      const response = await projectApi.updateProject(projectId, updateData, {
        headers: {
          Authorization: `Bearer ${testToken}`,
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      console.log("프로젝트 업데이트 성공:", data);
    },
    onError: (error) => {
      console.error("프로젝트 업데이트 오류:", error);
    },
  });
};
