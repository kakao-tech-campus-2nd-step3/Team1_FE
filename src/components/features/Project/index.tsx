import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { ProgressAccorodion } from './ProgressAccordion';
import { Sidebar } from './Sidebar';

export const Project = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        borderRadius="full"
        backgroundColor="transparent"
        _hover={{ backgroundColor: 'gray.200' }}
        _active={{ backgroundColor: 'gray.300' }}
        margin={3}
      >
        <HamburgerIcon boxSize={5} />
      </Button>

      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Box
        marginLeft={isOpen ? '320px' : '0'}
        transition="margin-left 0.3s ease"
        p={4}
        flex="1"
      >
        <Container maxW="container.xl" p={5}>
          <Flex justifyContent="space-between" alignItems="center" py={6}>
            <Text fontSize="4xl" fontWeight="bold">
              Project
            </Text>
            <Flex>
              <Button {...buttonStyle} mr={4}>
                팀원 관리
              </Button>
              <Button {...buttonStyle} mr={4}>
                프로젝트 설정
              </Button>
            </Flex>
          </Flex>
        </Container>

        <Container maxW="container.xl" padding={6}>
          <ProgressAccorodion />
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
