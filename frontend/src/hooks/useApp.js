import constants from "../constants";
import { userStore } from "../state";
import { useEffect } from "react";

const useApp = () => {
  const setIsLoggedIn = userStore((state) => state.setIsLoggedIn);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${constants.baseApiUrl}/user/isLoggedIn`, {
        credentials: "include",
      });
      if (res.status === 200) {
        setIsLoggedIn(true);
      }
    };

    fetchData();
  }, []);
};

export default useApp;
