import configureAxios from "../../api/axios";

export const getUserData = async () => {
  try {
    const api = configureAxios();

    const response = await api.get("/user/profile");

    const profile = response.data.data;

    return profile;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Error al obtener los datos del usuario");
  }
};
