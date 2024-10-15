import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TaskProps {
  task: {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    ownerId: number;
    progress: number;
    status: "시작 전" | "진행 중" | "완료";
    priority: "high" | "medium" | "low";
  };
}

export const KanbanTask = ({ task }: TaskProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    touchAction: "none",
  };
  return (
    <Card
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      key={task.id}
      size="sm"
      mb={10}
      borderRadius="30px"
      p={2}
    >
      <CardHeader pb={1}>
        <Flex direction="column" gap={2}>
          <Badge
            bg={getBadgeColor(task.priority)}
            p="1"
            maxW="65px"
            textAlign="center"
            borderRadius="20px"
            fontSize="11px"
          >
            {task.priority}
          </Badge>
          <Heading size="15px">{task.name}</Heading>
        </Flex>
      </CardHeader>
      <CardBody pt={1}>
        <Text fontSize="sm" color="#6D7280">
          {task.description}
        </Text>
        <Text fontSize="sm" color="#666666">
          {task.startDate}
        </Text>
      </CardBody>
    </Card>
  );
};

const getBadgeColor = (importance: string): string => {
  switch (importance) {
    case "high":
      return "#FEC4B1";
    case "medium":
      return "#FEEBB5";
    case "low":
      return "#ECFAE9";
    default:
      return "#D9D9D9";
  }
};
