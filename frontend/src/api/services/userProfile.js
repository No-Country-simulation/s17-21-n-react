import configureAxios from "../../api/axios";

export const getUserData = async (token) => {
  try {
    const api = configureAxios();

    const response = await api.get("/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    const profile = response.data.data;

    return profile;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Error al obtener los datos del usuario");
  }
};
