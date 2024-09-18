import configureAxios from "../axios";

export const getAllYears = async () => {
  try {
    const api = configureAxios();

    const response = await api.get("/academic-year");

    const subjects = response.data.data.content;

    return subjects;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Error al obtener los años académicos");
  }
};
