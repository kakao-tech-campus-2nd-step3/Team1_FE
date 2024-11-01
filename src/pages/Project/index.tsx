import { Container, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type { ProjectDetail } from "@/api/generated/data-contracts";

import { ProgressTracker } from "../..//components/features/Project/ProgressTracker";
import { Project as ProjectApi } from "../../api/generated/Project";
import { Project } from "../../components/features/Project";
import { ProgressAccordion } from "../../components/features/Project/ProgressAccordion";

export const ProjectPage = () => {
  const projectId = useParams().id;
  const [projectData, setProjectData] = useState<ProjectDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjectData = async () => {
      if (!projectId || parseInt(projectId) <= 0) {
        navigate("/");
        return;
      }

      const projectApi = new ProjectApi();
      try {
        const response = await projectApi.getProject(parseInt(projectId));
        setProjectData(response.data.resultData || null);
      } catch (err) {
        setError("Failed to fetch project data");
      }
    };

    fetchProjectData();
  }, [projectId, navigate]);

  if (error) navigate("/");
  if (!projectData) return <div>Loading...</div>;

  return (
    <>
      <Project />
      <Container maxW="container.xl" padding={6}>
        {projectData.id !== undefined && (
          <Stack spacing={6}>
            <ProgressAccordion projectDetail={projectData} />
            <ProgressTracker projectId={projectData.id} />
          </Stack>
        )}
      </Container>
    </>
  );
};
