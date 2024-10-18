export const RouterPath = {
  root: "/",
  login: "/login",
  signup: "/signup",
  projectList: "/projects",
  project: "/projects/:id",
  projectKanban: "/projects/:id/kanban",
  memberDetails: "/members/:id",
  joinProject: "/join-project",
  notFound: "*",
} as const;

export const getDynamicPath = {
  project: (project: string) => RouterPath.project.replace(":id", project),
  login: (redirect?: string) => {
    const currentRedirect = redirect ?? window.location.href;
    return `${RouterPath.login}?redirect=${encodeURIComponent(currentRedirect)}`;
  },
};
