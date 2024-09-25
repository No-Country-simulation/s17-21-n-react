import configureAxios from "../axios";

export const addCourse = async (courseData) => {
  try {
    const api = configureAxios();
    const response = await api.post("/subject", courseData);
    return response;
  } catch (error) {
    console.error("Error al agregar el curso:", error);
    throw error.response ? error.response.data : new Error("Error al agregar el curso");
  }
};
