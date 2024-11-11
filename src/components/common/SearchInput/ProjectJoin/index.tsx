import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useCallback, useState } from 'react';

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

interface JoinResponse {
  projectId: number;
  guestId: number;
}

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onJoinSuccess?: (projectId: number, guestId: number) => void;
}

const mockJoinProject = async (email: string): Promise<JoinResponse> => {
  console.log('Sending invitation to:', email);
  return { projectId: 1, guestId: 1 };
};

export const EmailInput: React.FC<SearchInputProps> = ({
  onJoinSuccess,
  ...props
}) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
  }, []);

  const handleJoin = useCallback(async () => {
    if (!isValid) return;

    console.log('Attempting to send invitation to:', email);
    try {
      const response = await mockJoinProject(email);
      console.log('Invitation sent successfully:', response);
      onJoinSuccess?.(response.projectId, response.guestId);
    } catch (error) {
      console.error('Failed to send invitation:', error);
    }
  }, [email, isValid, onJoinSuccess]);

  return (
    <Container>
      <StyledInput
        value={email}
        onChange={handleEmailChange}
        placeholder="이메일 주소를 입력해주세요."
        {...props}
      />
      <Button
        onClick={handleJoin}
        isDisabled={!isValid}
        width="120px"
        height="40px"
        mt="16px"
        bg={isValid ? "#7B7FF6" : "#E2E8F0"}
        color="white"
        _hover={{
          bg: isValid ? "#6972F0" : "#E2E8F0"
        }}
        _active={{
          bg: isValid ? "#5A63E6" : "#E2E8F0"
        }}
        _disabled={{
          bg: "#E2E8F0",
          cursor: "not-allowed",
          opacity: 1
        }}
        borderRadius="8px"
      >
        참여하기
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  height: 3rem;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 13.86px;
  &:focus {
    box-shadow: outline;
  }
  &::placeholder {
    color: #A0AEC0;
  }
`;

export default EmailInput;