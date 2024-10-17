import { Container, Stack } from '@chakra-ui/react';

import { ProgressTracker } from '../..//components/features/Project/ProgressTracker';
import { Project } from '../../components/features/Project';
import { ProgressAccordion } from '../../components/features/Project/ProgressAccordion';

export const ProjectPage = () => {
  // TODO: 임시 -> 변경 필요
  const projectId = parseInt('1');

  return (
    <>
      <Project />
      <Container maxW="container.xl" padding={6}>
        <Stack spacing={6}>
          <ProgressAccordion />
          <ProgressTracker projectId={projectId} />
        </Stack>
      </Container>
    </>
  );
};
