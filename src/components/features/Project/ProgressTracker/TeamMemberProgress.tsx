import { Box, Flex, Progress, Text, Tooltip } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useRef, useState } from "react";

import type { MemberProgress } from "@/api/generated/data-contracts";

import { ProgressLabel } from "./ProgressLabel";
import { TeamMemberProfile } from "./TeamMemberProfile";

const createFillAnimation = (progress: number) => keyframes`
  0% { width: 0%; }
  100% { width: ${progress}%; }
`;

export const TeamMemberProgress = ({ member }: { member: MemberProgress }) => {
  const { teamMember, progress } = member;
  const activeTasks = member.activeTasks || [];

  const fillAnimation = createFillAnimation(progress || 0);

  const [tooltipX, setTooltipX] = useState<number>(0);
  const boxRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (boxRef.current) {
      const { left } = boxRef.current.getBoundingClientRect();
      const offsetX = e.clientX - left;
      setTooltipX(offsetX);
    }
  };

  return (
    <Flex
      mt={2}
      mb={2}
      width="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <TeamMemberProfile teamMember={teamMember} />
      <Tooltip
        label={`${activeTasks[0]?.name ? `${activeTasks[0]?.name}${activeTasks.length > 1 ? ` 외 ${activeTasks.length - 1}건 진행 중` : " 진행 중"}` : "진행 중인 태스크 없음"}`}
        placement="auto-start"
        aria-label="activeTask"
        offset={[tooltipX, 0]}
        borderRadius={5}
        bgColor="gray.600"
      >
        <Box
          flex="1"
          position="relative"
          mx={4}
          ref={boxRef}
          onMouseMove={handleMouseMove}
        >
          <Progress
            value={progress || 0}
            height={9}
            borderRadius="full"
            sx={{
              "& > div": {
                animation: `${fillAnimation} 2s ease-in-out forwards`,
                width: `${progress || 0}%`,
                backgroundColor: `rgba(49, 130, 206, ${0.5 + (progress || 0) / 200})`,
              },
            }}
          />

          {activeTasks && activeTasks.length > 0 && (
            <ProgressLabel
              progress={progress || 0}
              label={activeTasks[0].name || ""}
            />
          )}

          <ProgressText width={12} height={7} borderRadius="full">
            {progress}%
          </ProgressText>
        </Box>
      </Tooltip>
    </Flex>
  );
};

const ProgressText = styled(Text)`
  position: absolute;
  right: 10px;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  font-weight: bold;
  color: black;
  background-color: rgba(255, 255, 255, 0.8);
`;
