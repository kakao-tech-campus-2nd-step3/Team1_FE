import { rest } from "msw";

import type { Role } from "@/types/index";

import { getTeamProgressPath } from "./useTeamProgress";

const mockTeamProgressData = [
  {
    teamMember: {
      id: 101,
      name: "춘식이",
      role: "developer" as Role,
      imageURL: "https://via.placeholder.com/40",
    },
    progress: 3,
    activeTasks: [
      {
        id: 1,
        name: "진행 중인 태스크 1",
        progress: 30,
        description: "설명",
        startDate: "2024-10-01T09:00:00Z",
        endDate: "2024-10-10T17:00:00Z",
      },
    ],
  },
  {
    teamMember: {
      id: 102,
      name: "라이언",
      role: "developer" as Role,
      imageURL: "https://via.placeholder.com/40",
    },
    progress: 90,
    activeTasks: [
      {
        id: 2,
        name: "진행 중인 태스크 2",
        progress: 30,
        description: "설명",
        startDate: "2024-10-15T09:00:00Z",
        endDate: "2024-10-20T17:00:00Z",
      },
    ],
  },
  {
    teamMember: {
      id: 103,
      name: "가나다라마바사아자차카타파하",
      role: "designer" as Role,
      imageURL: "https://via.placeholder.com/40",
    },
    progress: 30,
    activeTasks: [],
  },
];

export const teamProgressMockHandler = [
  rest.get(getTeamProgressPath(1), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ teamProgress: mockTeamProgressData })
    );
  }),
];
