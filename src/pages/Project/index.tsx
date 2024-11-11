import { Container, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ProgressTracker } from "../..//components/features/Project/ProgressTracker";
import { useGetProjectDetail } from "../../api/hooks/useGetProjectDetail";
import { Project } from "../../components/features/Project";
import { ProgressAccordion } from "../../components/features/Project/ProgressAccordion";

export const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id, 10) : null;
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetProjectDetail(projectId);

  useEffect(() => {
    if (!projectId || projectId <= 0) {
      navigate("/");
      return;
    }
  }, [projectId, navigate]);

  if (error) {
    console.log(error);
  }
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Project />
      <Container maxW="container.xl" padding={6}>
        {data?.id !== undefined && (
          <Stack spacing={6}>
            <ProgressAccordion projectDetail={data} />
            <ProgressTracker projectId={data.id} />
          </Stack>
        )}
      </Container>
    </>
  );
};
