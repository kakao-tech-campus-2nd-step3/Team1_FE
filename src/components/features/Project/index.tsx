import {
  Button,
  Container,
  Flex,
  Modal,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { ProjectSettingModal } from "../../common/modal/ProjectSetting/";

export const Project = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container maxW="container.xl" p={5}>
      <Flex justifyContent="space-between" alignItems="center" py={6}>
        <Text fontSize="5xl" fontWeight="bold">
          Project
        </Text>
        {/* TODO: 관리자만 보이도록 권한 설정 필요 */}
        <Flex m={2}>
          <Button {...buttonStyle} mr={4}>
            팀원 관리
          </Button>
          <Button {...buttonStyle} onClick={onOpen}>
            프로젝트 설정
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} size={"md"} isCentered>
            <ProjectSettingModal onClose={onClose} />
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
