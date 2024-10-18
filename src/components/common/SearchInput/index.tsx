import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IconButton, useToast } from "@chakra-ui/react";
import styled from "@emotion/styled";
import axios, { AxiosError } from "axios";
import React, { useState } from "react";

interface JoinResponse {
  projectId: number;
  guestId: number;
}

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onJoinSuccess?: (projectId: number, guestId: number) => void;
}

async function joinProject(code: string): Promise<JoinResponse> {
  const response = await axios.get<JoinResponse>(`/api/auth/join`, {
    params: { code },
  });
  return response.data;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  onJoinSuccess,
  ...props
}) => {
  const [value, setValue] = useState("");
  const toast = useToast();

  const handleJoin = async () => {
    try {
      const { projectId, guestId } = await joinProject(value);
      onJoinSuccess?.(projectId, guestId);
    } catch (error) {
      console.error("Error joining project:", error);
      toast({
        title: "프로젝트 참여 실패",
        description:
          error instanceof AxiosError && error.response?.status === 400
            ? "잘못된 코드입니다."
            : "서버 오류가 발생했습니다.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <InputGroup>
      <StyledInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
      <InputRightElement>
        <IconButton
          onClick={handleJoin}
          icon={<ArrowForwardIcon />}
          aria-label="Join Project"
          variant="ghost"
        />
      </InputRightElement>
    </InputGroup>
  );
};

const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  height: 3rem;
  width: 100%;
  padding-left: 1rem;
  padding-right: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 13.86px;
  &:focus {
    box-shadow: outline;
  }
`;

const InputRightElement = styled.div`
  position: absolute;
  right: 0.5rem;
  display: flex;
  align-items: center;
  height: 100%;
`;
