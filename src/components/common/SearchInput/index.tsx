import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IconButton, useToast } from "@chakra-ui/react";
import styled from "@emotion/styled";
import axios from "axios";
import React, { useState } from "react";

type Props = {
  onJoinSuccess?: (projectId: number, guestId: number) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const SearchInput = ({ onJoinSuccess, ...props }: Props) => {
  const [value, setValue] = useState("");
  const toast = useToast();

  const handleJoin = async () => {
    try {
      const response = await axios.get(
        `/api/auth/join?code=${encodeURIComponent(value)}`,
      );
      if (response.status === 200 && response.data) {
        const { projectId, guestId } = response.data;
        if (onJoinSuccess) {
          onJoinSuccess(projectId, guestId);
        }
      }
    } catch (error) {
      console.error("Error joining project:", error);
      toast({
        title: "프로젝트 참여 실패",
        description: "잘못된 코드이거나 서버 오류가 발생했습니다.",
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

const InputGroup = styled.div({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
});

const StyledInput = styled.input({
  height: "3rem",
  width: "100%",
  paddingLeft: "1rem",
  paddingRight: "3rem",
  border: "1px solid",
  borderColor: "rgba(0, 0, 0, 0.1)",
  borderRadius: "13.86px",
  "&:focus": {
    boxShadow: "outline",
  },
});

const InputRightElement = styled.div({
  position: "absolute",
  right: "0.5rem",
  display: "flex",
  alignItems: "center",
  height: "100%",
});