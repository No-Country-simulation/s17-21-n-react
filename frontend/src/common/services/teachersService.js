import configureAxios from "../../api/axios";

export const getAllTeachers = async () => {
  try {
    const api = configureAxios();

    const response = await api.get("/user", {
      params: {
        role: "TEACHER",
        orderBy: "name",
        sort: "desc",
      },
    });

    return response.data.data.content;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Error al obtener los docentes");
  }
};
