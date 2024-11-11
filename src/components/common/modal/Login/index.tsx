import {
  Button,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../../provider/Auth";
import { RouterPath } from "../../../../routes/path";

const IconWrapper = styled.span`
  margin-right: 1rem;
`;

export const LoginModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      onClose();
      navigate(RouterPath.projectList);
    }
  }, [user, navigate, onClose]);

  const loginWithGoogle = () => {
    console.log("Google login clicked");
    login("user@example.com");
  };

  const appleKakaoLogin = () => {
    alert("개발 예정입니다.");
  };

  return (
    <>
      <ModalOverlay />
      <StyledModalContent>
        <ModalHeader as="h1" fontSize={35} fontWeight={800} mb={10}>
          Hi, Welcome!
          <br />
          Nice Meet You
        </ModalHeader>
        <ModalCloseButton />
        <VStack spacing={5} align="stretch">
          <StyledButton onClick={loginWithGoogle}>
            <IconWrapper>
              <FcGoogle />
            </IconWrapper>
            Continue with Google
          </StyledButton>
          <StyledButton onClick={appleKakaoLogin}>
            <IconWrapper>
              <FaApple />
            </IconWrapper>
            Continue with Apple
          </StyledButton>
          <StyledButton onClick={appleKakaoLogin}>
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
  height: 55vh;
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
