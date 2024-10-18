import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

import { Image } from "../../components/common/Image";
import { SearchInput } from "../../components/common/SearchInput";

export const HomePage: React.FC = () => {
  const handleJoinSuccess = (projectId: number, guestId: number) => {
    console.log(`Successfully joined project ${projectId} as guest ${guestId}`);
  };

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={150} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={10}>
            Faster, Simple Team Work
          </Heading>
          <Heading as="h2" size="xl" mb={100}>
            For Free!
          </Heading>
          <Box maxW="md" mx="auto">
            <Text fontSize="2xl" mb={5}>
              팀의 멤버이신가요?
            </Text>
            <SearchInput
              placeholder="# 참여코드로 시작"
              onJoinSuccess={handleJoinSuccess}
              height={50}
            />
          </Box>
        </Box>
        <Box>
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team working together"
            ratio={16 / 9}
          />
        </Box>
      </VStack>
    </Container>
  );
};
