import { create } from 'zustand';
import configureAxios from '../api/axios';

const api = configureAxios();

const imgStore = create((set) => ({
  img: "",
  errors: null,
  loadImgs: async (id) => {
    try {
      const { data } = await api.get(`/img/${id}`);
      set({ img: data, error: null });

    } catch (error) {
      console.error('Error loading img:', error);
      set({ error: 'Error loading img' });
    }
  },
  resetImgs: () => set({ imgs: "" }),
}));

export default imgStore;