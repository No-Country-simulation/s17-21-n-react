import { create } from "zustand";
import configureAxios from "../api/axios";

const useCoursesStore = create((set) => ({
  courses: [],
  loading: true,
  error: null,

  fetchCourses: async () => {
    try {
      const api = configureAxios();

      const response = await api.get("/subject", {
        params: {
          orderBy: "name",
          sort: "asc",
        },
      });

      set({ courses: response.data.data.content, loading: false });
    } catch (error) {
      console.error("Error al obtener las materias:", error);
      set({ error: error.message || "Error al obtener los cursos", loading: false });
      throw error.response ? error.response.data : new Error("Error al obtener los docentes");
    }
  },
}));

export default useCoursesStore;
