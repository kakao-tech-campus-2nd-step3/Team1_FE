import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export const getTestToken = (): string | null => {
  return localStorage.getItem("testToken");
};

export const TokenTest = () => {
  const [testToken, setToken] = useState<string>(
    localStorage.getItem("authToken") || ""
  );

  const handleSaveTestToken = () => {
    localStorage.setItem("testToken", testToken);
    console.log("testToken saved:", testToken);
    window.location.reload();
  };

  const handleDeleteTestToken = () => {
    localStorage.removeItem("authToken");
    setToken("");
    console.log("testToken deleted");
  };

  return (
    <Box>
      <Text fontSize="lg" mb={4}>
        [테스트용] 토큰 테스트
      </Text>
      <Input
        placeholder="testToken"
        value={testToken}
        onChange={(e) => setToken(e.target.value)}
        mb={4}
      />
      <Button bgColor="blue.200" onClick={handleSaveTestToken}>
        토큰 적용
      </Button>
      <Button bgColor="red.200" onClick={handleDeleteTestToken}>
        토큰 삭제
      </Button>
    </Box>
  );
};
