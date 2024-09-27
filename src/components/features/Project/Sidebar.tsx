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
        <Flex justifyContent="space-between" padding={3}>
          <UserProfile />

          <Button
            onClick={onClose}
            borderRadius={'full'}
            backgroundColor="transparent"
            display="inline-block"
            _hover={{ backgroundColor: 'gray.200' }}
            _active={{ backgroundColor: 'gray.300' }}
            alignItems={'center'}
          >
            <ChevronLeftIcon boxSize={5} />
          </Button>
        </Flex>

        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <Text mb={4}>홈</Text>
          <Text mb={4}>프로젝트</Text>
          <Text mb={4}>진행도</Text>
          <Text mb={4}>일정 관리</Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
