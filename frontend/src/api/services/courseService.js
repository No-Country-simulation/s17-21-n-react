import configureAxios from "../axios";

export const getAllCourse = async () => {
  try {
    const api = configureAxios();

    const response = await api.get("/subject", {
      params: {
        orderBy: "name",
        sort: "asc",
      },
    });

    const subjects = response.data.data.content;

    return subjects;
  } catch (error) {
    console.error("Error al obtener las materias:", error);
    throw error.response ? error.response.data : new Error("Error al obtener los docentes");
  }
};

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
