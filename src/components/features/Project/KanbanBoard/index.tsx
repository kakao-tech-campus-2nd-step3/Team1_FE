import { Flex, SimpleGrid } from "@chakra-ui/react";
import type { DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useMemo, useState } from "react";

import type { TaskStatus, TaskType } from "@/types/index";

import { initialTasks } from "./initialTask";
import { KanbanColumn } from "./KanbanColumn";

interface Column {
  id: string;
  status: TaskStatus;
  tasks: TaskType[];
}

export const KanbanBoard = () => {
  const [tasks, setTasks] = useState<TaskType[]>(initialTasks);

  const getColumns: Column[] = useMemo(() => {
    return [
      {
        id: "not_started",
        status: "NOT_STARTED",
        tasks: tasks.filter((task) => task.status === "NOT_STARTED"),
      },
      {
        id: "in-progress",
        status: "IN_PROGRESS",
        tasks: tasks.filter((task) => task.status === "IN_PROGRESS"),
      },
      {
        id: "completed",
        status: "COMPLETED",
        tasks: tasks.filter((task) => task.status === "COMPLETED"),
      },
    ];
  }, [tasks]);

  const getTaskPos = (id: UniqueIdentifier) =>
    tasks.findIndex((task) => task.id === id);

  console.log(getColumns);
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setTasks((updatedTasks) => {
      const originalTask = tasks.find((task) => task.id === active.id);
      const targetTask = tasks.find((task) => task.id === over.id);

      if (!originalTask || !targetTask) return updatedTasks;

      if (targetTask.status !== originalTask.status) {
        originalTask.status = targetTask.status;
      }

      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(updatedTasks, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        borderRadius={"10px"}
        border={"1px solid #D8DADC"}
        borderColor="#D8DADC"
      >
        <SortableContext items={tasks.map((task) => task.id)}>
          <SimpleGrid columns={3} spacing={4} width="100%" p={4}>
            {getColumns.map((column) => (
              <KanbanColumn key={column.id} column={column} />
            ))}
          </SimpleGrid>
        </SortableContext>
      </Flex>
    </DndContext>
  );
};
