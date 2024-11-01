import { Container, Stack } from "@chakra-ui/react";

import { KanbanBoard } from "../..//components/features/Project/KanbanBoard";
import { Project } from "../../components/features/Project";

export const ProjectKanbanPage = () => {
  return (
    <>
      <Project />
      <Container maxW="container.xl" padding={6}>
        <Stack spacing={6}>
          {/* <ProgressAccordion projectDetail={projectData} /> */}
          <KanbanBoard />
        </Stack>
      </Container>
    </>
  );
};
