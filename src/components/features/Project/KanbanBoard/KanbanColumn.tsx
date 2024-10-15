import { AddIcon } from "@chakra-ui/icons";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { KanbanTask } from "./KanbanTask";

interface Task {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  ownerId: number;
  progress: number;
  status: "시작 전" | "진행 중" | "완료";
  priority: "high" | "medium" | "low";
}

interface ColumnProps {
  columns: {
    status: string;
    tasks: Task[];
  };
}

export const KanbanColumn = ({ columns }: ColumnProps) => {
  return (
    <Card>
      <Flex direction="column">
        <CardHeader>
          <Flex>
            <Badge
              bg={getStatusBadgeColor(columns.status)}
              p="1"
              width="90px"
              textAlign="center"
              borderRadius="10px"
              fontSize="16px"
            >
              {columns.status}
            </Badge>
          </Flex>
        </CardHeader>
        <CardBody>
          <SortableContext
            items={columns.tasks.map((task) => task.id)}
            strategy={verticalListSortingStrategy}
          >
            {columns.tasks.map((task) => (
              <KanbanTask key={task.id} task={task} />
            ))}
          </SortableContext>
          <Flex justifyContent="center">
            <IconButton
              isRound={true}
              variant="solid"
              aria-label="AddTask"
              fontSize="20px"
              icon={<AddIcon />}
              bg="transparent"
              color="#727272"
            />
          </Flex>
        </CardBody>
      </Flex>
    </Card>
  );
};

const getStatusBadgeColor = (status: string): string => {
  switch (status) {
    case "대기 중":
      return "#D9D9D9";
    case "진행 중":
      return "#D3E5EF";
    case "완료":
      return "#DBEDDB";
    default:
      return "#D9D9D9";
  }
};
