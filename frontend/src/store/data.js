import { create } from "zustand";
import configureAxios from "../api/axios";

const api = configureAxios();

const dataUserStore = create((set) => ({
  data: {},
  loadUserById: async (userId) => {
    try {
      const res = await api.get(`/users/${userId}`);
      set({ data: res.data });
    } catch (error) {
      console.error("Error loading user by ID:", error);
    }
  },
}));

export default dataUserStore;
