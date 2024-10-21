import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../provider/Auth";
import { getDynamicPath } from "../path";

export const PrivateRoute = () => {
  const authInfo = useAuth();

  if (!authInfo) {
    return <Navigate to={getDynamicPath.login()} />;
  }

  return <Outlet />;
};
