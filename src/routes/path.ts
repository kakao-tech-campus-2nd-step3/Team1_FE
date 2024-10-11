export const RouterPath = {
  root: '/',
  login: '/login',
  signup: '/signup',
  projectList: '/projects',
  project: '/projects/:id',
  projectKanban: '/projects/:id/kanban',
  memberDetails: '/members/:id',
  joinProject: '/join-project',
  notFound: '*',
} as const;
