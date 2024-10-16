import { Avatar, Box, Flex, Progress, Stack, Text } from '@chakra-ui/react';

import type { Role } from '@/types/index';

const mockTeamProgress = [
  {
    teamMember: {
      id: 101,
      name: '춘식이',
      role: 'developer' as Role,
      imageURL: 'https://via.placeholder.com/40',
    },
    progress: 70,
    activeTasks: [
      {
        id: 1,
        name: '진행 중인 태스크 1',
        progress: 30,
        description: '설명',
        startDate: '2024-10-01T09:00:00Z',
        endDate: '2024-10-10T17:00:00Z',
      },
    ],
  },
  {
    teamMember: {
      id: 102,
      name: '라이언',
      role: 'developer' as Role,
      imageURL: 'https://via.placeholder.com/40',
    },
    progress: 50,
    activeTasks: [
      {
        id: 2,
        name: '진행 중인 태스크 2',
        progress: 30,
        description: '설명',
        startDate: '2024-10-15T09:00:00Z',
        endDate: '2024-10-20T17:00:00Z',
      },
    ],
  },
];

const teamProgress = mockTeamProgress;

export const ProgressTracker = () => {
  return (
    <Box
      alignItems={'center'}
      borderRadius={'10px'}
      border={'1px solid #D8DADC'}
      borderColor="#D8DADC"
      p={8}
    >
      <Stack spacing={4} align="center">
        {teamProgress.map((member) => (
          <Flex
            key={member.teamMember.id}
            mt={2}
            mb={2}
            width="100%"
            justifyContent="center"
          >
            <Flex alignItems="center" justifyContent="center">
              <Avatar
                name={member.teamMember.name}
                src={member.teamMember.imageURL}
                size="sm"
              />
              <Text fontWeight="bold" mr={4} width="80px" textAlign="center">
                {member.teamMember.name}
              </Text>
            </Flex>
            <Box flex="1" position="relative" overflow="hidden">
              <Progress
                value={member.progress}
                colorScheme={'blue'}
                height={8}
                borderRadius="full"
              />
              <Text
                position="absolute"
                left={`${member.progress / 2}%`}
                top="50%"
                transform="translate(-50%, -50%)"
                fontWeight="bold"
                color="white"
              >
                {member.activeTasks.map((task) => task.name)}
              </Text>
            </Box>
            <Text ml={4}>{member.progress}%</Text>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};
