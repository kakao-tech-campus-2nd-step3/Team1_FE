import { Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const fadeInDelay = keyframes`
  0% { opacity: 0; }
  100% { opacity: 0; }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const ProgressLabel = ({
  progress,
  label,
}: {
  progress: number;
  label: string;
}) => (
  <Text
    position="absolute"
    left={`${progress / 2}%`}
    top="50%"
    transform="translate(-50%, -50%)"
    fontWeight="bold"
    color="white"
    whiteSpace="nowrap"
    overflow="hidden"
    textOverflow="ellipsis"
    maxWidth={`${progress}%`}
    p={1}
    textShadow="1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(0, 0, 0, 0.5)"
    animation={`${fadeInDelay} 1s ease-in-out, ${fadeIn} 2s 0.5s ease-in-out`}
  >
    {label}
  </Text>
);
