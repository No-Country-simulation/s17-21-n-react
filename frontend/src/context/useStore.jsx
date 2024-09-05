import { create } from "zustand";

export const useStore = create((set) => ({
  user: null,
  login: (loginUser) => set({ user: loginUser }),
  logout: () => set({ user: null }),
}));
