import { AddIcon } from '@chakra-ui/icons';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import type { TaskStatus, TaskType } from '@/types/index';

import { KanbanTask } from './KanbanTask';

interface ColumnProps {
  columns: {
    status: TaskStatus;
    tasks: TaskType[];
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
              {statusLabels[columns.status]}
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

const statusLabels: Record<TaskStatus, string> = {
  NOT_STARTED: '시작 전',
  IN_PROGRESS: '진행 중',
  COMPLETED: '완료',
};

const statusBadgeColor: Record<TaskStatus, string> = {
  NOT_STARTED: '#D9D9D9',
  IN_PROGRESS: '#D3E5EF',
  COMPLETED: '#DBEDDB',
};

const getStatusBadgeColor = (status: TaskStatus): string => {
  return statusBadgeColor[status] || '#D9D9D9';
};
