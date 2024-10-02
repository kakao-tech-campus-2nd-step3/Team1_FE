import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

export const KanbanBoard = () => {
  const columns = [
    {
      title: '시작 전',
      tasks: [
        {
          importance: '높은 중요도',
          name: '작업 1',
          description: '작업 1 설명',
          date: '2024-10-01',
        },
        {
          importance: '보통 중요도',
          name: '작업 2',
          description: '작업 2 설명',
          date: '2024-10-02',
        },
        {
          importance: '낮은 중요도',
          name: '작업 3',
          description: '작업 3 설명',
          date: '2024-10-03',
        },
      ],
    },
    {
      title: '진행 중',
      tasks: [
        {
          importance: '보통 중요도',
          name: '작업 4',
          description: '작업 4 설명',
          date: '2024-10-04',
        },
        {
          importance: '높은 중요도',
          name: '작업 5',
          description: '작업 5 설명',
          date: '2024-10-05',
        },
      ],
    },
    {
      title: '완료',
      tasks: [
        {
          importance: '낮은 중요도',
          name: '작업 6',
          description: '작업 6 설명',
          date: '2024-10-06',
        },
        {
          importance: '보통 중요도',
          name: '작업 7',
          description: '작업 7 설명',
          date: '2024-10-07',
        },
      ],
    },
  ];

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      borderRadius={'10px'}
      border={'1px solid #D8DADC'}
      borderColor="#D8DADC"
    >
      <SimpleGrid columns={3} spacing={4} width="100%" p={4}>
        {columns.map((column) => (
          <Card key={column.title}>
            <Flex direction="column">
              <CardHeader>
                <Flex>
                  <Badge
                    bg={getStatusBadgeColor(column.title)}
                    p="1"
                    width="90px"
                    textAlign="center"
                    borderRadius="10px"
                    fontSize="16px"
                  >
                    {column.title}
                  </Badge>
                </Flex>
              </CardHeader>
              <CardBody>
                {column.tasks.map((task, index) => (
                  <Card key={index} size="sm" mb={10} borderRadius="30px" p={2}>
                    <CardHeader pb={1}>
                      <Flex direction="column" gap={2}>
                        <Badge
                          bg={getBadgeColor(task.importance)}
                          p="1"
                          width="65px"
                          textAlign="center"
                          borderRadius="20px"
                          fontSize="11px"
                        >
                          {task.importance}
                        </Badge>
                        <Heading size="15px">{task.name}</Heading>
                      </Flex>
                    </CardHeader>
                    <CardBody pt={1}>
                      <Text fontSize="sm" color="#6D7280">
                        {task.description}
                      </Text>
                      <Text fontSize="sm" color="#666666">
                        {task.date}
                      </Text>
                    </CardBody>
                  </Card>
                ))}
              </CardBody>
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

const getBadgeColor = (importance: string) => {
  switch (importance) {
    case '높은 중요도':
      return '#FEC4B1';
    case '보통 중요도':
      return '#FEEBB5';
    case '낮은 중요도':
      return '#ECFAE9';
    default:
      return '#D9D9D9';
  }
};

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case '시작 전':
      return '#D9D9D9';
    case '진행 중':
      return '#D3E5EF';
    case '완료':
      return '#DBEDDB';
    default:
      return '#D9D9D9';
  }
};
