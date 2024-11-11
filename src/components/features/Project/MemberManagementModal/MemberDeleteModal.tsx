import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

import type { MemberResponseDTO } from "../../../../api/generated/data-contracts";
import { MemberProfile } from "./MemberProfile";

interface ProfileDeleteModalProps extends MemberResponseDTO {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const ProfileDeleteModal = ({
  isOpen,
  onClose,
  onDelete,
  ...member
}: ProfileDeleteModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>팀원 삭제</ModalHeader>
        <ModalBody>
          <VStack>
            <Box p={2}>
              <MemberProfile {...member} />
            </Box>
            <Text fontWeight="bold">정말 해당 팀원을 삭제하시겠습니까?</Text>
            <Text color="red.500">이 작업은 되돌릴 수 없습니다.</Text>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Flex direction="column" flex={1} gap={3}>
            <Button colorScheme="red" size="sm" onClick={onDelete} width="100%">
              삭제
            </Button>
            <Button variant="outline" size="sm" onClick={onClose} width="100%">
              취소
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
