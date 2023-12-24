import { useEffect, useRef, useState } from "react";
import constants from "../constants";
import { useNavigate } from "react-router-dom";
import { userStore } from "../state";

const useRegister = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    age: "",
    location: "",
    interests: [],
    gender: "",
    lookingToDate: "",
    bio: "",
    password: "",
    repeatPassword: "",
    profilePicture: null,
    photos: [],
  });

  const interests = [
    "Music",
    "Sports",
    "Movies",
    "Cooking",
    "Traveling",
    "Food",
    "Books",
    "Gaming",
    "Coding",
    "Art",
    "Photography",
  ];
  const locations = [
    "Sofia",
    "Plovdiv",
    "Varna",
    "Burgas",
    "Ruse",
    "Stara Zagora",
    "Pleven",
    "Sliven",
    "Dobrich",
    "Shumen",
  ];

  const [showInterests, setShowInterests] = useState(false);
  const interestRef = useRef();
  const navigate = useNavigate();
  const setIsLoggedIn = userStore((state) => state.setIsLoggedIn);

  const setProperty = (property, value) => {
    setUserInfo({ ...userInfo, [property]: value });
  };

  const addInterest = (interest) => {
    if (!userInfo.interests.includes(interest)) {
      setProperty("interests", [...userInfo.interests, interest]);
      return;
    }

    setProperty(
      "interests",
      userInfo.interests.filter((i) => i !== interest)
    );
  };

  const handleClickOutside = (e) => {
    if (interestRef.current && !interestRef.current.contains(e.target)) {
      setShowInterests(false);
    }
  };

  const removeProfilePicture = (e) => {
    e.preventDefault();
    setProperty("profilePicture", null);
  };

  const removePhoto = (e, idx) => {
    e.preventDefault();
    setProperty(
      "photos",
      userInfo.photos.filter((_, i) => i !== idx)
    );
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const register = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(userInfo).forEach(([key, value]) => {
      if (key !== "photos" && key !== "interests") {
        formData.append(key, value);
      }
    });
    userInfo.interests.forEach((interest) => {
      formData.append("interests", interest);
    });
    userInfo.photos.forEach((photo) => {
      formData.append("photos", photo);
    });

    const res = await fetch(`${constants.baseApiUrl}/user/register`, {
      credentials: "include",
      method: "POST",
      body: formData,
    });

    if (res.status === 400) {
      const data = await res.json();
      setError(data.errors[0]);
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      navigate("/profile");
    }
  };

  return {
    userInfo,
    setProperty,
    addInterest,
    showInterests,
    setShowInterests,
    interests,
    locations,
    interestRef,
    removeProfilePicture,
    removePhoto,
    register,
  };
};

export default useRegister;
