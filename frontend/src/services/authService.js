import configureAxios from "../api/axios";
import useUserStore from "../store/auth";

export const loginService = async (email, password) => {
  try {
    const api = configureAxios();
    
    const response = await api.post("/auth/login", { email, password });

    const { token, user } = response.data.data;

    const { setTokenAndUser } = useUserStore.getState();
    setTokenAndUser(token, {
      id: user.id,
      role: user.role,
      name: user.name,
      lastName: user.lastName,
    });

    return { token, user };
  } catch (error) {
    throw error.response ? error.response.data : new Error("Error en el login");
  }
};
