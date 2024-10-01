import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { ProgressAccordion } from './ProgressAccordion';
import { Sidebar } from './SidebarSection/index';

export const Project = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Sidebar isOpen={isOpen} onClose={onClose} />

      {!isOpen && (
        <Button
          onClick={onOpen}
          borderRadius="full"
          backgroundColor="transparent"
          _hover={{ backgroundColor: 'gray.100' }}
          margin={3}
          zIndex={1}
        >
          <HamburgerIcon boxSize={5} />
        </Button>
      )}

      <Box
        marginLeft={isOpen ? '320px' : '0'}
        transition="margin-left 0.3s ease"
        p={4}
        flex="1"
        zIndex={1}
      >
        <Container maxW="container.xl" p={5}>
          <Flex justifyContent="space-between" alignItems="center" py={6}>
            <Text fontSize="5xl" fontWeight="bold">
              Project
            </Text>

            <Flex m={2}>
              <Button {...buttonStyle} mr={4}>
                팀원 관리
              </Button>
              <Button {...buttonStyle}>프로젝트 설정</Button>
            </Flex>
          </Flex>
        </Container>

        <Container maxW="container.xl" padding={6}>
          <Stack spacing={6}>
            <ProgressAccordion />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const buttonStyle = {
  size: 'lg',
  px: 8,
  py: 4,
  height: 'auto',
  backgroundColor: '#95A4FC',
  color: 'white',
};
