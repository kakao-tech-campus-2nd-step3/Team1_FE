import {
  Avatar,
  Box,
  Flex,
  keyframes,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";

import type { TeamProgressResponseData } from "../../../../api/hooks/useTeamProgress";
import { useGetTeamProgress } from "../../../../api/hooks/useTeamProgress";

const createFillAnimation = (progress: number) => keyframes`
  0% { width: 0%; }
  100% { width: ${progress}%; }
`;

export const ProgressTracker = ({ projectId }: { projectId: number }) => {
  const { data, isLoading } = useGetTeamProgress(projectId);

  if (isLoading) return <Text>Loading...</Text>;

  const teamProgressData: TeamProgressResponseData = data || {
    teamProgress: [],
  };

  return (
    <Box
      alignItems={"center"}
      borderRadius={"10px"}
      border={"1px solid #D8DADC"}
      borderColor="#D8DADC"
      p={8}
      overflow="hidden"
    >
      <Stack spacing={4} align="center" width="100%">
        {teamProgressData.teamProgress.map((member) => {
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
                <Text fontWeight="bold" ml={4} width="100px" align="center">
                  {member.teamMember.name}
                </Text>
              </Flex>

              <Box flex="1" position="relative" mx={4}>
                <Progress
                  value={member.progress}
                  height={9}
                  borderRadius="full"
                  sx={{
                    "& > div": {
                      animation: `${fillAnimation} 2s ease-in-out forwards`,
                      width: `${member.progress}%`,
                      backgroundColor: `rgba(49, 130, 206, ${0.5 + member.progress / 200})`,
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
