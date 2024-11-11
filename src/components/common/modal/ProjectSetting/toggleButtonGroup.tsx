import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

interface ToggleButtonGroupProps {
  label: string;
  options: string[];
  selectedOption: string;
  onChange: (option: string) => void;
  id: string;
}

export const ToggleButtonGroup = ({
  id,
  label,
  options,
  selectedOption,
  onChange,
}: ToggleButtonGroupProps) => {
  return (
    <FormControl as="fieldset" display="flex" gap={3}>
      <HStack width="100%" alignItems="flex-start">
        <FormLabel
          as="legend"
          m="0"
          minWidth="26%"
          color="#727272"
          fontSize={18}
          fontWeight={800}
          height="50px"
          display="flex"
          alignItems="center"
        >
          {label}
        </FormLabel>
        <VStack width="100%" align="start">
          <ButtonGroup variant="outline" width="100%">
            {options.map((option) => (
              <StyledButton
                key={option}
                flex={1}
                isActive={selectedOption === option}
                onClick={() => onChange(option)}
                id={`${id}-${option}`}
              >
                {option}
              </StyledButton>
            ))}
          </ButtonGroup>
          <Box height="16px">
            {selectedOption === "기본" && (
              <Text fontSize="sm" color="gray.500" position="absolute">
                이메일 전송, 빵빠레 기능이 포함됩니다.
              </Text>
            )}
          </Box>
        </VStack>
      </HStack>
    </FormControl>
  );
};

const StyledButton = styled(Button)<{ isActive: boolean }>`
  height: 50px;
  padding: 4px 8px;
  background-color: ${({ isActive }) =>
    isActive ? "#95a4fc !important" : "transparent"};
  color: ${({ isActive }) => (isActive ? "white" : "#727272")};
  borderColor = 1.3px solid #E3E3E3;
  white-space: normal;
`;
