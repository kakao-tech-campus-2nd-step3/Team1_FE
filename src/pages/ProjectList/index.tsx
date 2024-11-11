import { AddIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { ScheduleList } from "../../components/common/ScheduleCard";
import { SearchInput } from "../../components/common/SearchInput/ProjectCode";
import { ProjectCard } from "../../components/features/Home/ProjectCard";

type Project = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  option: {
    type: "basic" | "custom";
    customOption?: {
      celebrationEffect: boolean;
      colorChange: boolean;
      emailNotification: boolean;
    };
  };
};

const initialProjects: Project[] = [
  {
    id: 1,
    name: "디자인 시스템 개발",
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date(new Date().setMonth(new Date().getMonth() + 1))
      .toISOString()
      .split("T")[0],
    option: {
      type: "custom",
      customOption: {
        celebrationEffect: true,
        colorChange: true,
        emailNotification: true,
      },
    },
  },
  {
    id: 2,
    name: "프론트엔드 리팩토링",
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date(new Date().setMonth(new Date().getMonth() + 2))
      .toISOString()
      .split("T")[0],
    option: {
      type: "basic",
    },
  },
  {
    id: 3,
    name: "백엔드 API 개발",
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date(new Date().setMonth(new Date().getMonth() + 1))
      .toISOString()
      .split("T")[0],
    option: {
      type: "custom",
      customOption: {
        celebrationEffect: false,
        colorChange: true,
        emailNotification: false,
      },
    },
  },
];

const handleJoinSuccess = (projectId: number, guestId: number) => {
  console.log(`Successfully joined project ${projectId} as guest ${guestId}`);
};

export const ProjectListPage: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [startIndex, setStartIndex] = useState(0);

  const projectsPerView = 4;

  const handleCreateProject = () => {
    if (newProjectTitle.trim()) {
      const today = new Date();
      const endDate = new Date(today);
      endDate.setMonth(today.getMonth() + 1);

      const newProject: Project = {
        id: projects.length + 1,
        name: newProjectTitle,
        startDate: today.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        option: {
          type: "basic",
        },
      };

      setProjects([...projects, newProject]);
      setNewProjectTitle("");
      onClose();
    }
  };

  const visibleProjects = projects.slice(
    startIndex,
    startIndex + projectsPerView,
  );

  const shouldShowNavigation = projects.length > projectsPerView;

  const canGoPrevious = startIndex > 0;
  const canGoNext = startIndex + projectsPerView < projects.length;

  const handlePrevious = () => {
    if (canGoPrevious) {
      setStartIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setStartIndex((prev) =>
        Math.min(projects.length - projectsPerView, prev + 1),
      );
    }
  };

  return (
    <Box>
      <Box maxW="lg" mx="auto">
        <SearchInput
          placeholder="# 참여코드로 시작"
          onJoinSuccess={handleJoinSuccess}
          height={50}
          width={50}
        />
      </Box>

      <Box mt={10}>
        <Flex alignItems="center" justifyContent="center" gap="800">
          <Text fontSize="20px" fontWeight="bold" mb={6}>
            프로젝트
          </Text>
          <Button
            backgroundColor="#95A4FC"
            color="#FFFFFF"
            onClick={onOpen}
            leftIcon={<AddIcon />}
          >
            생성
          </Button>
        </Flex>

        <Flex justifyContent="center" alignItems="center" gap={6} p={5}>
          {shouldShowNavigation && (
            <IconButton
              aria-label="Previous projects"
              icon={<ChevronLeftIcon />}
              onClick={handlePrevious}
              isDisabled={!canGoPrevious}
            />
          )}

          <Flex gap={6}>
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.name}
                startDate={project.startDate}
                endDate={project.endDate}
                option={project.option}
              />
            ))}
          </Flex>

          {shouldShowNavigation && (
            <IconButton
              aria-label="Next projects"
              icon={<ChevronRightIcon />}
              onClick={handleNext}
              isDisabled={!canGoNext}
            />
          )}
        </Flex>

        {/* 임시 모달 */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>새 프로젝트 생성</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={3}>
                <Input
                  placeholder="프로젝트 명 입력"
                  value={newProjectTitle}
                  onChange={(e) => setNewProjectTitle(e.target.value)}
                />
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleCreateProject}>
                확인
              </Button>
              <Button variant="ghost" onClick={onClose}>
                취소
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Box maxW="1010" mx="auto" mb={10}>
        <ScheduleList />
      </Box>
    </Box>
  );
};

export default ProjectListPage;
