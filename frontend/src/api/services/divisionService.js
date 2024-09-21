import configureAxios from "../axios";

export const getAllDivisions = async () => {
  try {
    const api = configureAxios();

    const response = await api.get("/division", {
      params: {
        orderBy: "name",
        sort: "asc",
      },
    });

    const subjects = response.data.data.content;

    return subjects;
  } catch (error) {
    console.error("Error al obtener las divisiones:", error);
    throw error.response ? error.response.data : new Error("Error al obtener los divisiones");
  }
};
