import { Avatar, Flex, Link, Text, Tooltip } from "@chakra-ui/react";

export const TeamMemberProfile = ({
  teamMember,
}: {
  teamMember?: { id?: number; name?: string; role?: string; imageURL?: string };
}) => {
  // TODO: 칸반 보드 구현 후 projectId, memberID 수정
  const projectId = 1;
  const memberId = ""; // 원래는 teamMember?.id; 이나 임시로 설정
  return (
    <Tooltip
      label={`${teamMember?.name}의 칸반보드 이동`}
      placement="auto-start"
      maxW="200px"
      openDelay={500}
      borderRadius={5}
      bgColor="gray.600"
    >
      <Link
        href={`/projects/${projectId}/kanban/${memberId}`}
        _hover={{ textDecoration: "none" }}
      >
        <Flex
          alignItems="center"
          p={1}
          position="relative"
          cursor="pointer"
          _hover={{ backgroundColor: "#F6F6F6", borderRadius: "0.5rem" }}
          height="50px"
          py={8}
          transition="background-color 0.2s"
        >
          <Avatar
            name={teamMember?.name}
            src={teamMember?.imageURL}
            size="sm"
          />
          <Text fontWeight="bold" ml={4} width="100px" align="center">
            {teamMember?.name}
          </Text>
        </Flex>
      </Link>
    </Tooltip>
  );
};
