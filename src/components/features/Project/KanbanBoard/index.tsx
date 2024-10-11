import { Flex, SimpleGrid } from '@chakra-ui/react';
import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { useState } from 'react';

import type { TaskStatus, TaskType } from '@/types/index';

import { KanbanColumn } from './KanbanColumn';

interface Column {
  status: TaskStatus;
  tasks: TaskType[];
}

export const KanbanBoard = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 1,
      name: '작업 1',
      description: '작업 1 설명',
      startDate: '2024-10-01T09:00:00Z',
      endDate: '2024-10-15T17:00:00Z',
      ownerId: 101,
      progress: 5,
      status: 'NOT_STARTED',
      priority: 'HIGH',
    },
    {
      id: 2,
      name: '작업 2',
      description: '작업 2 설명',
      startDate: '2024-10-02T09:00:00Z',
      endDate: '2024-10-16T17:00:00Z',
      ownerId: 102,
      progress: 3,
      status: 'IN_PROGRESS',
      priority: 'MEDIUM',
    },
    {
      id: 3,
      name: '작업 3',
      description: '작업 3 설명',
      startDate: '2024-10-03T09:00:00Z',
      endDate: '2024-10-17T17:00:00Z',
      ownerId: 103,
      progress: 0,
      status: 'NOT_STARTED',
      priority: 'LOW',
    },
    {
      id: 4,
      name: '작업 4',
      description: '작업 4 설명',
      startDate: '2024-10-04T09:00:00Z',
      endDate: '2024-10-18T17:00:00Z',
      ownerId: 104,
      progress: 50,
      status: 'IN_PROGRESS',
      priority: 'MEDIUM',
    },
    {
      id: 5,
      name: '작업 5',
      description: '작업 5 설명',
      startDate: '2024-10-05T09:00:00Z',
      endDate: '2024-10-19T17:00:00Z',
      ownerId: 105,
      progress: 75,
      status: 'IN_PROGRESS',
      priority: 'HIGH',
    },
    {
      id: 6,
      name: '작업 6',
      description: '작업 6 설명',
      startDate: '2024-10-06T09:00:00Z',
      endDate: '2024-10-20T17:00:00Z',
      ownerId: 106,
      progress: 100,
      status: 'COMPLETED',
      priority: 'LOW',
    },
    {
      id: 7,
      name: '작업 7',
      description: '작업 7 설명',
      startDate: '2024-10-07T09:00:00Z',
      endDate: '2024-10-21T17:00:00Z',
      ownerId: 107,
      progress: 100,
      status: 'COMPLETED',
      priority: 'MEDIUM',
    },
  ]);

  const columns: Column[] = [
    {
      status: 'NOT_STARTED',
      tasks: tasks.filter((task) => task.status === 'NOT_STARTED'),
    },
    {
      status: 'IN_PROGRESS',
      tasks: tasks.filter((task) => task.status === 'IN_PROGRESS'),
    },
    {
      status: 'COMPLETED',
      tasks: tasks.filter((task) => task.status === 'COMPLETED'),
    },
  ];

  const getTaskPos = (id: UniqueIdentifier) =>
    tasks.findIndex((task) => task.id === id);

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
    })
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
        borderRadius={'10px'}
        border={'1px solid #D8DADC'}
        borderColor="#D8DADC"
      >
        <SortableContext items={tasks.map((task) => task.id)}>
          <SimpleGrid columns={3} spacing={4} width="100%" p={4}>
            {columns.map((column) => (
              <KanbanColumn key={column.status} columns={column} />
            ))}
          </SimpleGrid>
        </SortableContext>
      </Flex>
    </DndContext>
  );
};
