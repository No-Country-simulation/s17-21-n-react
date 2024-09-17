import configureAxios from "../axios";

export const getAllCategories = async () => {
  try {
    const api = configureAxios();

    const response = await api.get("/subject-category", {
      params: {
        orderBy: "name",
        sort: "asc",
      },
    });

    const subjects = response.data.data.content;

    return subjects;
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
    throw error.response ? error.response.data : new Error("Error al obtener los categorías");
  }
};
