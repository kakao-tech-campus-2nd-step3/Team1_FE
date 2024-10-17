import {
  Avatar,
  Box,
  Flex,
  keyframes,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';

import type { Role } from '@/types/index';

const mockTeamProgress = [
  {
    teamMember: {
      id: 101,
      name: '춘식이',
      role: 'developer' as Role,
      imageURL: 'https://via.placeholder.com/40',
    },
    progress: 3,
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
    progress: 90,
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
  {
    teamMember: {
      id: 103,
      name: '가나다',
      role: 'designer' as Role,
      imageURL: 'https://via.placeholder.com/40',
    },
    progress: 30,
    activeTasks: [],
  },
];

const teamProgress = mockTeamProgress;

const createFillAnimation = (progress: number) => keyframes`
  0% { width: 0%; }
  100% { width: ${progress}%; }
`;

export const ProgressTracker = () => {
  return (
    <Box
      alignItems={'center'}
      borderRadius={'10px'}
      border={'1px solid #D8DADC'}
      borderColor="#D8DADC"
      p={8}
      overflow="hidden"
    >
      <Stack spacing={4} align="center" width="100%">
        {teamProgress.map((member) => {
          const fillAnimation = createFillAnimation(member.progress);

          return (
            <Flex
              key={member.teamMember.id}
              mt={2}
              mb={2}
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex alignItems="center">
                <Avatar
                  name={member.teamMember.name}
                  src={member.teamMember.imageURL}
                  size="sm"
                />
                <Text fontWeight="bold" ml={4} width="80px">
                  {member.teamMember.name}
                </Text>
              </Flex>

              <Box flex="1" position="relative" mx={4}>
                <Progress
                  value={member.progress}
                  colorScheme={'blue'}
                  height={9}
                  borderRadius="full"
                  sx={{
                    '& > div': {
                      animation: `${fillAnimation} 2s ease-in-out forwards`,
                      width: `${member.progress}%`,
                    },
                  }}
                />
                {member.activeTasks && member.activeTasks.length > 0 && (
                  <Text
                    position="absolute"
                    left={`${member.progress / 2}%`}
                    top="50%"
                    transform="translate(-50%, -50%)"
                    fontWeight="bold"
                    color="white"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    maxWidth={`${member.progress}%`}
                    p={1}
                  >
                    {member.activeTasks[0].name}
                  </Text>
                )}

                <Text
                  position="absolute"
                  right="10px"
                  top="50%"
                  width={12}
                  height={7}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transform="translateY(-50%)"
                  fontWeight="bold"
                  color="black"
                  overflow="hidden"
                  backgroundColor="rgba(255, 255, 255, 0.8)"
                  borderRadius="full"
                >
                  {member.progress}%
                </Text>
              </Box>
            </Flex>
          );
        })}
      </Stack>
    </Box>
  );
};
