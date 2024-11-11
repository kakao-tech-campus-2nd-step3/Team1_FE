import { Box, Stack, Text } from "@chakra-ui/react";

import type { MemberProgress } from "../../../../api/generated/data-contracts";
import { useGetTeamProgress } from "../../../../api/hooks/useGetTeamProgress";
import { TeamMemberProgress } from "./TeamMemberProgress";

export const ProgressTracker = ({
  projectId,
  page = 0,
  size = 5,
  sort = "string",
}: {
  projectId: number;
  page?: number;
  size?: number;
  sort?: string;
}) => {
  // TODO: 페이지네이션 구현
  const { data, isLoading } = useGetTeamProgress(projectId, page, size, sort);

  if (isLoading) return <Text>Loading...</Text>;

  const teamProgressData: MemberProgress[] = data?.resultData || [];

  return (
    <Box
      alignItems={"center"}
      borderRadius={"10px"}
      border={"1px solid #D8DADC"}
      borderColor="#D8DADC"
      p={8}
      overflow="hidden"
    >
      {teamProgressData.length > 0 && (
        <Stack spacing={1} align="center" width="100%">
          {teamProgressData.map((member) => (
            <TeamMemberProgress key={member.teamMember?.id} member={member} />
          ))}
        </Stack>
      )}
    </Box>
  );
};
