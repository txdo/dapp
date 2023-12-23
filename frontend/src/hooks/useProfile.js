import { useEffect, useState } from "react";
import constants from "../constants";

const useProfile = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${constants.baseApiUrl}/user/info`, {
        credentials: "include",
      });
      if (res.status === 200) {
        const data = await res.json();
        setUserInfo(data.userInfo);
      }
    };

    fetchData();
  }, []);

  return userInfo;
};

export default useProfile;
