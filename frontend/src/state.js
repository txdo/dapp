import { create } from "zustand";

export const userStore = create((set) => ({
  isLoggedIn: null,
  setIsLoggedIn: (value) => set({ isLoggedIn: value }),
}));
