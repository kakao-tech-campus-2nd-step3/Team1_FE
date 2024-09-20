import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "../components/features/Layout";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { SignupPage } from "../pages/Signup";
import { ProjectListPage } from "../pages/ProjectList";
import { ProjectPage } from "../pages/Project";
import { MemberDetailsPage } from "../pages/MemberDetails";
import { JoinProjectPage } from "../pages/JoinProject";
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
        element: <ProjectListPage />,
      },
      {
        path: RouterPath.project,
        element: <ProjectPage />,
      },
      {
        path: RouterPath.memberDetails,
        element: <MemberDetailsPage />,
      },
      {
        path: RouterPath.joinProject,
        element: <JoinProjectPage />,
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
