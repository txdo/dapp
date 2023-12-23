import { Navigate, Outlet } from "react-router-dom";
import { userStore } from "../state";

const IsNotAuthenticated = () => {
  const isLoggedIn = userStore((state) => state.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default IsNotAuthenticated;
