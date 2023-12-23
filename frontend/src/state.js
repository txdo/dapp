import { create } from "zustand";

export const userStore = create((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (value) => set({ isLoggedIn: value }),
}));
