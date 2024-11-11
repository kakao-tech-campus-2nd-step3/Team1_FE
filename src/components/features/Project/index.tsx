import {
  Button,
  Container,
  Flex,
  Modal,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { ProjectSettingModal } from "../../common/modal/ProjectSetting/";
import { MemberManagementModal } from "./MemberManagementModal";

export const Project = () => {
  const {
    isOpen: isMemberManagementModalOpen,
    onOpen: onMemberManagementModalOpen,
    onClose: onMemberManagementModalClose,
  } = useDisclosure();

  const {
    isOpen: isProjectSettingModalOpen,
    onOpen: onProjectSettingModalOpen,
    onClose: onProjectSettingModalClose,
  } = useDisclosure();
  return (
    <Container maxW="container.xl" p={5}>
      <Flex justifyContent="space-between" alignItems="center" py={6}>
        <Text fontSize="5xl" fontWeight="bold">
          Project
        </Text>
        {/* TODO: 관리자만 보이도록 권한 설정 필요 */}
        <Flex m={2}>
          <Button {...buttonStyle} onClick={onMemberManagementModalOpen} mr={4}>
            팀원 관리
          </Button>
          <Modal
            isOpen={isMemberManagementModalOpen}
            onClose={onMemberManagementModalClose}
            size={"md"}
            isCentered
          >
            <MemberManagementModal />
          </Modal>
          <Button {...buttonStyle} onClick={onProjectSettingModalOpen}>
            프로젝트 설정
          </Button>
          <Modal
            isOpen={isProjectSettingModalOpen}
            onClose={onProjectSettingModalClose}
            size={"md"}
            isCentered
          >
            {/* TODO: 프로젝트 생성 모달 - 프로젝트 세팅 모달 간 컴포넌트 공유할지 고민하기 */}
            <ProjectSettingModal onClose={onProjectSettingModalClose} />
          </Modal>
        </Flex>
      </Flex>
    </Container>
  );
};

const buttonStyle = {
  size: "lg",
  px: 8,
  py: 4,
  height: "auto",
  backgroundColor: "#95A4FC",
  color: "white",
};
