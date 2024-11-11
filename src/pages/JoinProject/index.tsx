import { Box, Text, VStack } from "@chakra-ui/react";

import { Image } from "../../components/common/Image";
import { EmailInput } from "../../components/common/SearchInput/ProjectJoin";

export const JoinProjectPage = () => {
  return (
    <VStack spacing={150} align="stretch">
        <Box  maxW="md" mx="auto" mt={50}>
          <Image
            src="https://i.ibb.co/0GknsbY/image.png"
            alt="image1"
            width={500}
            height={500}
            ratio={16 / 9}
          />
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={50}>
            [ 프로젝트 ] 팀에 참여해주세요!
          </Text>
          <EmailInput
            placeholder="이메일을 입력해주세요"
            height={50}
            />
      </Box>

    </VStack>
  );
};
