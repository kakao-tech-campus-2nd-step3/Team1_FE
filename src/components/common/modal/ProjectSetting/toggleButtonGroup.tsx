import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
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
    <FormControl as="fieldset" display="flex" alignItems="center" gap={3}>
      <HStack width="100%">
        <FormLabel
          as="legend"
          m="0"
          minWidth="26%"
          color="#727272"
          fontSize={18}
          fontWeight={800}
        >
          {label}
        </FormLabel>
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
