import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Progress,
  Text,
} from '@chakra-ui/react';

export const ProgressAccordion = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      borderRadius={'10px'}
      border={'1px solid #D8DADC'}
      borderColor="#D8DADC"
    >
      <Accordion allowMultiple flex="1">
        <AccordionItem>
          <AccordionButton flex="1">
            <AccordionIcon boxSize={10} />
            <Box minW="100px" flex="1">
              <Text fontSize="xl" fontWeight="bold">
                프로젝트 이름
              </Text>
            </Box>
            <Progress
              value={60}
              size="lg"
              colorScheme="gray"
              width="80%"
              height={5}
              borderRadius="full"
              margin={3}
            />
          </AccordionButton>

          <AccordionPanel pb={4}>내용</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
