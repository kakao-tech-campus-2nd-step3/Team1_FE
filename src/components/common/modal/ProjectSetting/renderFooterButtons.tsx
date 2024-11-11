import { Button, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

type FooterButtonConfig = { label: string; action: "next" | "prev" | "submit" };

type ButtonActionHandlers = {
  next: () => void;
  prev: () => void;
  submit: () => void;
};

const footerConfig: Record<number, Record<string, FooterButtonConfig[]>> = {
  1: {
    기본: [{ label: "저장", action: "submit" }],
    "사용자 설정": [{ label: "다음", action: "next" }],
  },
  2: {
    "사용자 설정": [
      { label: "이전", action: "prev" },
      { label: "저장", action: "submit" },
    ],
  },
};

const createButtonActions = (
  handleNextPage: () => void,
  handlePreviousPage: () => void,
  onSubmit: () => void
): ButtonActionHandlers => ({
  next: handleNextPage,
  prev: handlePreviousPage,
  submit: onSubmit,
});

export const renderFooterButtons = (
  currentPage: number,
  selectedFeature: string,
  handleNextPage: () => void,
  handlePreviousPage: () => void,
  onSubmit: () => void,
  isValid: boolean
) => {
  const currentConfig = footerConfig[currentPage]?.[selectedFeature] || [];

  const buttonAction = createButtonActions(
    handleNextPage,
    handlePreviousPage,
    onSubmit
  );

  return (
    <Flex
      justifyContent={currentPage === 1 ? "flex-end" : "space-between"}
      width="100%"
    >
      {currentConfig.map((buttonConfig, index) => (
        <StyledButton
          key={index}
          action={buttonConfig.action}
          type={buttonConfig.action === "submit" ? "submit" : "button"}
          disabled={!isValid}
          onClick={buttonAction[buttonConfig.action]}
        >
          {buttonConfig.label}
        </StyledButton>
      ))}
    </Flex>
  );
};

const StyledButton = styled(Button)<{ action: string }>`
  height: 50px;
  padding: 4px 8px;
  width: 134px;
  background-color: ${({ action }) =>
    action === "submit" ? "#95a4fc" : "white"};
  color: ${({ action }) => (action === "submit" ? "white" : "#333")};
  border: ${({ action }) => (action === "submit" ? "none" : "1px solid #ddd")};
`;
