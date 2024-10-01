import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { UserProfile } from './UserProfile';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  if (!isOpen) return null;

  return (
    <Box
      width="320px"
      height="100vh"
      bg="gray.100"
      p={4}
      boxShadow="lg"
      position="fixed"
      zIndex={20}
    >
      <Flex justifyContent="space-between" padding={4}>
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

      <Flex padding={4}>
        <UserProfile />
      </Flex>

      <Text fontSize="20px" fontWeight="bold" pl={4}>
        Menu
      </Text>
      <Box padding={4}>
        <Text mb={4}>프로젝트 홈</Text>
        <Text mb={4}>진행도</Text>
        <Text mb={4}>일정 관리</Text>
      </Box>
    </Box>
  );
};
