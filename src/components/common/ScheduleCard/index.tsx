import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

type TaskOwner = {
  id: number;
  name: string;
  role: string;
  imageURL: string;
};

type Task = {
  id: number;
  name: string;
  description: string;
  owner: TaskOwner;
  startTime: string; // 시작 시간 추가
  endTime: string; // 종료 시간 추가
  startDate: string;
  endDate: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  status: number;
};

type ApiResponse = {
  errorCode: number;
  errorMessage: string;
  resultData: Task[];
  size: number;
  page: number;
  pages: number;
  hasNext: boolean;
  total: number;
};

// 현재 로그인한 사용자 정보
const CURRENT_USER = {
  id: 1,
  name: "채연",
};

const ScheduleCard: React.FC<{ date: string; tasks: Task[] }> = ({
  date,
  tasks,
}) => {
  const getDisplayDate = (dateStr: string): string => {
    const today = new Date();
    const targetDate = new Date(dateStr);

    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    switch (diffDays) {
      case 0:
        return "오늘";
      case 1:
        return "내일";
      case 2:
        return "모레";
      default:
        return `${targetDate.getMonth() + 1}월 ${targetDate.getDate()}일`;
    }
  };

  return (
    <Box>
      <Text fontSize="16px" mb={4}>
        {getDisplayDate(date)}
      </Text>
      <VStack spacing={2} align="stretch">
        {tasks.length === 0 ? (
          <Text fontSize="14px" color="gray.500">
            예정된 일정이 없습니다
          </Text>
        ) : (
          tasks.map((task) => (
            <Flex key={task.id} align="center">
              <Box w="4px" h="40px" bg="#95A4FC" mr={2} borderRadius="2px" />
              <VStack align="start" spacing={0}>
                <Text color="#95A4FC" fontSize="12px">
                  {`오전 ${task.startTime} - ${task.endTime}`}
                </Text>
                <Text fontSize="14px">{task.name}</Text>
              </VStack>
            </Flex>
          ))
        )}
      </VStack>
    </Box>
  );
};

export const ScheduleList: React.FC = () => {
  // Mock API response
  const mockApiResponse: ApiResponse = {
    errorCode: 200,
    errorMessage: "Success",
    resultData: [
      {
        id: 1,
        name: "팀 회의",
        description: "주간 업무 계획 회의",
        owner: { id: 1, name: "채연", role: "팀원", imageURL: "" },
        startTime: "10:00",
        endTime: "11:00",
        startDate: new Date().toISOString(),
        endDate: new Date(
          new Date().setDate(new Date().getDate() + 1),
        ).toISOString(),
        priority: "HIGH",
        status: 0,
      },
      {
        id: 2,
        name: "팀 회의2",
        description: "스프린트 회고",
        owner: { id: 1, name: "채연", role: "팀원", imageURL: "" },
        startTime: "11:00",
        endTime: "12:00",
        startDate: new Date().toISOString(),
        endDate: new Date(
          new Date().setDate(new Date().getDate()),
        ).toISOString(),
        priority: "MEDIUM",
        status: 0,
      },
      {
        id: 3,
        name: "팀 회의",
        description: "일일 스크럼",
        owner: { id: 1, name: "채연", role: "팀원", imageURL: "" },
        startTime: "10:00",
        endTime: "11:00",
        startDate: new Date(
          new Date().setDate(new Date().getDate() + 1),
        ).toISOString(),
        endDate: new Date(
          new Date().setDate(new Date().getDate() + 2),
        ).toISOString(),
        priority: "HIGH",
        status: 0,
      },
      {
        id: 4,
        name: "팀 회의",
        description: "기술 리뷰",
        owner: { id: 1, name: "채연", role: "팀원", imageURL: "" },
        startTime: "10:00",
        endTime: "13:00",
        startDate: new Date(
          new Date().setDate(new Date().getDate() + 2),
        ).toISOString(),
        endDate: new Date(
          new Date().setDate(new Date().getDate() + 2),
        ).toISOString(),
        priority: "LOW",
        status: 0,
      },
    ],
    size: 10,
    page: 0,
    pages: 1,
    hasNext: false,
    total: 4,
  };

  // 현재 사용자의 태스크만 필터링
  const filterUserTasks = (tasks: Task[]): Task[] => {
    return tasks.filter((task) => task.owner.id === CURRENT_USER.id);
  };

  const getTasksByDate = (date: string): Task[] => {
    const filteredTasks = filterUserTasks(mockApiResponse.resultData);
    return filteredTasks.filter((task) => {
      const taskStart = new Date(task.startDate);
      const taskEnd = new Date(task.endDate);
      const targetDate = new Date(date);

      taskStart.setHours(0, 0, 0, 0);
      taskEnd.setHours(0, 0, 0, 0);
      targetDate.setHours(0, 0, 0, 0);

      return targetDate >= taskStart && targetDate <= taskEnd;
    });
  };

  const getDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split("T")[0]);
    }

    return dates;
  };

  const dates = getDates();

  return (
    <Box>
      <Box px={6}>
        <Text fontSize="18px" fontWeight="bold" mb={6}>
          예정 일정
        </Text>
        <Box
          border="1px solid #D9D9D9"
          borderRadius="lg"
          bg="white"
          overflow="hidden"
        >
          <Flex position="relative">
            <Box flex="1" p={6}>
              <ScheduleCard date={dates[0]} tasks={getTasksByDate(dates[0])} />
            </Box>

            <Box
              position="absolute"
              left="50%"
              top={6}
              bottom={6}
              width="1px"
              bg="#D9D9D9"
              transform="translateX(-50%)"
            />

            <Box flex="1" p={6}>
              <VStack spacing={6} align="stretch">
                <ScheduleCard
                  date={dates[1]}
                  tasks={getTasksByDate(dates[1])}
                />
                <ScheduleCard
                  date={dates[2]}
                  tasks={getTasksByDate(dates[2])}
                />
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ScheduleList;
