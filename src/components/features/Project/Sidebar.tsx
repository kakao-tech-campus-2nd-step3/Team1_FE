import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Flex,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { UserProfile } from './UserProfile';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <Drawer
      placement="left"
      onClose={onClose}
      isOpen={isOpen}
      closeOnOverlayClick={false}
    >
      <DrawerContent>
        <Flex justifyContent="space-between" padding={4}>
          <Link to="/">
            <Text fontSize="3xl" fontWeight="bold">
              Seamless
            </Text>
          </Link>

          <Button
            onClick={onClose}
            borderRadius={'full'}
            backgroundColor="transparent"
            display="inline-block"
            _hover={{ backgroundColor: 'gray.100' }}
            alignItems={'center'}
          >
            <ChevronLeftIcon boxSize={5} />
          </Button>
        </Flex>

        <Flex padding={4}>
          <UserProfile />
        </Flex>

        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <Text mb={4}>프로젝트 홈</Text>
          <Text mb={4}>진행도</Text>
          <Text mb={4}>일정 관리</Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
