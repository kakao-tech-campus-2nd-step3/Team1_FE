import { useQuery } from "@tanstack/react-query";

import type { ProjectDetail } from "@/api/generated/data-contracts";

import { projectApi } from "../../api/projectApi";
import { getTestToken } from "../../components/features/Project/TokenTest";

const getProjectDetail = async (
  projectId: number
): Promise<ProjectDetail | null> => {
  try {
    const testToken = getTestToken();
    const response = await projectApi.getProject(projectId, {
      headers: {
        Authorization: `Bearer ${testToken}`,
      },
    });

    if (!response.data || !response.data.resultData) {
      throw new Error("Project data not found");
    }

    return response.data.resultData;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch project details"
    );
  }
};

export const useGetProjectDetail = (projectId: number | null) => {
  return useQuery<ProjectDetail | null, Error>({
    queryKey: ["project", projectId],
    queryFn: () => {
      if (projectId === null) {
        throw new Error("Project ID cannot be null");
      }

      return getProjectDetail(projectId);
    },
    enabled: !!projectId,
  });
};
