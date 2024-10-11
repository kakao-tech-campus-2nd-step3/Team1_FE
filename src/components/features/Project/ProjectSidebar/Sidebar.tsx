import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { UserProfile } from './UserProfile';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <Box
      width="250px"
      height="100vh"
      bg="gray.100"
      p={4}
      boxShadow="lg"
      transition="margin-left 0.3s ease, opacity 0.3s ease"
      marginLeft={isOpen ? '0' : '-250px'}
      opacity={isOpen ? 1 : 0}
      position="fixed"
      zIndex={10}
    >
      <Flex justifyContent="space-between" padding={2}>
        <Link to="/">
          <Text fontSize="3xl" fontWeight="bold">
            Seamless
          </Text>
        </Link>

        <Button
          onClick={onClose}
          borderRadius="full"
          backgroundColor="transparent"
          _hover={{ backgroundColor: 'gray.200' }}
        >
          <ChevronLeftIcon boxSize={5} />
        </Button>
      </Flex>

      <Flex padding={2}>
        <UserProfile />
      </Flex>

      <Stack padding={2} gap={8}>
        <Stack gap={2}>
          <Text fontSize="20px" fontWeight="bold">
            Menu
          </Text>

          <Flex direction="column">
            {/* TODO: 실제 프로젝트id를 동적으로 받아와야 함 */}
            <Link to="/projects/:id">
              <Text mt={2} mb={2}>
                프로젝트 홈
              </Text>
            </Link>
            <Link to="/projects/:id/kanban">
              <Text mt={2} mb={2}>
                칸반 보드
              </Text>
            </Link>
          </Flex>
        </Stack>

        <Stack gap={2}>
          <Text fontSize="20px" fontWeight="bold">
            TODO
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};
