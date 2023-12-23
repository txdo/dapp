import { useNavigate } from "react-router-dom";
import { userStore } from "../state";
import constants from "../constants";

const useHeader = () => {
  const setIsLoggedIn = userStore((state) => state.setIsLoggedIn);
  const navigate = useNavigate();

  const logout = async () => {
    const res = await fetch(`${constants.baseApiUrl}/user/logout`, {
      credentials: "include",
    });
    if (res.status === 200) {
      setIsLoggedIn(false);
      navigate("/");
    }
  };

  return logout;
};

export default useHeader;
