export type TaskStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
export type TaskPriority = "HIGH" | "MEDIUM" | "LOW";

export type TaskType = {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  ownerId: number;
  progress: number;
  status: TaskStatus;
  priority: TaskPriority;
};

export type Role = "developer" | "designer" | "all";

export type TeamMember = {
  id: number;
  name: string;
  role: Role;
  imageURL: string;
};

export type ActiveTask = {
  id: number;
  name: string;
  progress: number;
  description: string;
  startDate: string;
  endDate: string;
};

export type TeamProgress = {
  teamMember: TeamMember;
  progress: number;
  activeTasks: ActiveTask[];
};
