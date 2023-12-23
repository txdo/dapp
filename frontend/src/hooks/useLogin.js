import { useState } from "react";
import constants from "../constants";
import { useNavigate } from "react-router-dom";
import { userStore } from "../state";

const useLogin = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const setIsLoggedIn = userStore((state) => state.setIsLoggedIn);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const res = await fetch(`${constants.baseApiUrl}/user/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    });
    if (res.status === 200) {
      setIsLoggedIn(true);
      navigate("/profile");
    } else {
      const data = await res.json();
      setError(data.errors[0]);
    }
  };

  return { userInfo, setUserInfo, login, error };
};

export default useLogin;
