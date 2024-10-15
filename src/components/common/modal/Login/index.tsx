import {
  Button,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";

const IconWrapper = styled.span`
  margin-right: 1rem;
`;

export const LoginModal: React.FC = () => {
  return (
    <>
      <ModalOverlay />
      <StyledModalContent>
        <ModalHeader as="h1" fontSize={46} fontWeight={800} mb={20}>
          Hi, Welcome!
          <br />
          Nice Meet You
        </ModalHeader>
        <ModalCloseButton />
        <VStack spacing={7} align="stretch">
          <StyledButton>
            <IconWrapper>
              <FcGoogle />
            </IconWrapper>
            Continue with Google
          </StyledButton>
          <StyledButton>
            <IconWrapper>
              <FaApple />
            </IconWrapper>
            Continue with Apple
          </StyledButton>
          <StyledButton>
            <IconWrapper>
              <RiKakaoTalkFill />
            </IconWrapper>
            Continue with Kakao
          </StyledButton>
        </VStack>
      </StyledModalContent>
    </>
  );
};

const StyledModalContent = styled(ModalContent)`
  height: 45vh;
  background-color: #f0f3fb;
  border-radius: 20px;
  padding-left: 2rem;
  padding-right: 2rem;
  justify-content: center;
  text-align: center;
`;

const StyledButton = styled(Button)`
  background-color: white;
  color: black;
  width: 100%;
  justify-content: center;
  padding: 1.5rem 1rem;
  font-size: 20px;
  border-radius: 28px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f8f8f8;
  }
`;
