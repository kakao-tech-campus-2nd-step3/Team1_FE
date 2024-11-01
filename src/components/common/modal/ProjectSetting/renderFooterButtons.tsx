import { Button, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

type FooterButtonConfig = { label: string; action: string };

const footerConfig: Record<number, Record<string, FooterButtonConfig[]>> = {
  1: {
    기본: [{ label: "저장", action: "close" }],
    "사용자 설정": [{ label: "다음", action: "next" }],
  },
  2: {
    "사용자 설정": [
      { label: "이전", action: "prev" },
      { label: "저장", action: "close" },
    ],
  },
};

export const renderFooterButtons = (
  currentPage: number,
  selectedFeature: string,
  onClose: () => void,
  handleNextPage: () => void,
  handlePreviousPage: () => void
) => {
  const currentConfig = footerConfig[currentPage]?.[selectedFeature] || [];

  return (
    <Flex
      justifyContent={currentPage === 1 ? "flex-end" : "space-between"}
      width="100%"
    >
      {currentConfig.map((buttonConfig, index) => (
        <StyledButton
          key={index}
          action={buttonConfig.action}
          onClick={() => {
            if (buttonConfig.action === "close") onClose();
            else if (buttonConfig.action === "next") handleNextPage();
            else if (buttonConfig.action === "prev") handlePreviousPage();
          }}
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
    action === "close" ? "#95a4fc" : "white"};
  color: ${({ action }) => (action === "close" ? "white" : "#333")};
  border: ${({ action }) => (action === "close" ? "none" : "1px solid #ddd")};
`;
