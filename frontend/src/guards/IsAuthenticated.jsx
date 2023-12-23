import { Navigate, Outlet } from "react-router-dom";
import { userStore } from "../state";

const IsAuthenticated = () => {
  const isLoggedIn = userStore((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/register" replace />;
  }

  return <Outlet />;
};

export default IsAuthenticated;
