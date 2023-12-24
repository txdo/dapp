import { Outlet, Navigate } from "react-router-dom";
import { userStore } from "../state";

const AuthGuard = ({ condition, navigateTo }) => {
  const isLoggedIn = userStore((state) => state.isLoggedIn);

  if (condition !== isLoggedIn && isLoggedIn !== null)
    return <Navigate to={navigateTo} replace />;

  return <Outlet />;
};

export default AuthGuard;
