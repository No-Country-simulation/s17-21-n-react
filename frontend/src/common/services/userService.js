import configureAxios from "../../api/axios";

export const addUser = async (userData) => {
  try {
    const api = configureAxios();

    const response = await api.post("/user", userData);

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Error al agregar el usuario");
  }
};
