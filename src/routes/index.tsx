import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "../components/features/Layout";
import { ProjectSidebar } from "../components/features/Project/ProjectSidebar";
import { HomePage } from "../pages/Home";
import { JoinProjectPage } from "../pages/JoinProject";
import { LoginPage } from "../pages/Login";
import { MemberDetailsPage } from "../pages/MemberDetails";
import { ProjectPage } from "../pages/Project";
import { ProjectKanbanPage } from "../pages/ProjectKanban";
import { ProjectListPage } from "../pages/ProjectList";
import { SignupPage } from "../pages/Signup";
import { PrivateRoute } from "./components/PrivateRoute";
import { RouterPath } from "./path";

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: RouterPath.projectList,
        element: <PrivateRoute />,
        children: [
          {
            path: RouterPath.projectList,
            element: <ProjectListPage />,
          },
        ],
      },
      {
        path: RouterPath.joinProject,
        element: <JoinProjectPage />,
      },
    ],
  },
  {
    path: RouterPath.memberDetails,
    element: <MemberDetailsPage />,
  },
  {
    path: RouterPath.project,
    element: <ProjectSidebar />,
    children: [
      {
        index: true,
        element: <ProjectPage />,
      },
      {
        path: RouterPath.projectKanban,
        element: <ProjectKanbanPage />,
      },
    ],
  },
  {
    path: RouterPath.login,
    element: <LoginPage />,
  },
  {
    path: RouterPath.signup,
    element: <SignupPage />,
  },
  {
    path: RouterPath.notFound,
    element: <Navigate to={RouterPath.root} />,
  },
]);

export const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};
