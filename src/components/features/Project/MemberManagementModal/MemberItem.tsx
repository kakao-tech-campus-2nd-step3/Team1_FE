import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import type { AxiosError } from "axios";
import { Ellipsis } from "lucide-react";
import { useParams } from "react-router-dom";

import type { MemberResponseDTO } from "../../../../api/generated/data-contracts";
import { useDeleteMember } from "../../../../api/hooks/useDeleteMember";
import { ProfileDeleteModal } from "./MemberDeleteModal";
import { MemberProfile } from "./MemberProfile";

export const MemberItem = (member: MemberResponseDTO) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const mutation = useDeleteMember();
  const projectId = useParams().id;
  const toast = useToast();

  const handleDelete = () => {
    console.log(projectId);
    console.log(member.id);
    if (projectId && member.id) {
      mutation.mutate(
        { projectId: parseInt(projectId), memberId: member.id },
        {
          onSuccess: () => {
            toast({
              title: "팀원 삭제 성공",
              description: `${member.name} 팀원이 삭제되었습니다.`,
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            onClose();
          },
          onError: (error: AxiosError) => {
            const errorMessage = error.request.responseText;

            toast({
              title: "팀원 삭제 실패",
              description: `${errorMessage}`,
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          },
        }
      );
    } else {
      console.error("프로젝트 ID 또는 멤버 ID가 없습니다.");
    }
  };

  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      _hover={{ backgroundColor: "#F6F6F6", borderRadius: "0.375rem" }}
      height="60px"
      transition="background-color 0.2s"
      p={2}
      py={8}
    >
      <MemberProfile {...member} />
      <Menu>
        <MenuButton
          as={IconButton}
          bgColor="transparent"
          aria-label="More member options"
          icon={<Ellipsis color="#5A5A5A" />}
          size="sm"
          m={1}
        />
        <MenuList
          minW="120px"
          boxShadow="md"
          border="1px solid"
          borderColor="gray.100"
          z-index={10}
        >
          <MenuItem textAlign="center" icon={<EditIcon />}>
            정보 수정
          </MenuItem>
          <MenuItem
            textAlign="center"
            icon={<DeleteIcon />}
            onClick={onOpen}
            _hover={{ color: "red.500" }}
          >
            팀원 삭제
          </MenuItem>
          <ProfileDeleteModal
            isOpen={isOpen}
            onClose={onClose}
            onDelete={handleDelete}
            {...member}
          />
        </MenuList>
      </Menu>
    </Flex>
  );
};
