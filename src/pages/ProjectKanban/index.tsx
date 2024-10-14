import { Container, Stack } from '@chakra-ui/react';

import { KanbanBoard } from '../..//components/features/Project/KanbanBoard';
import { Project } from '../../components/features/Project';
import { ProgressAccordion } from '../../components/features/Project/ProgressAccordion';

export const ProjectKanbanPage = () => {
  return (
    <>
      <Project />
      <Container maxW="container.xl" padding={6}>
        <Stack spacing={6}>
          <ProgressAccordion />
          <KanbanBoard />
        </Stack>
      </Container>
    </>
  );
};
