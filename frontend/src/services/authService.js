import configureAxios from "../api/axios";
import useUserStore from "../store/auth";

export const loginService = async (email, password) => {
  try {
    // Configurar axios sin token
    const api = configureAxios();

    console.log("Enviando solicitud de inicio de sesión con:", { email, password });

    // Enviar solicitud POST para iniciar sesión
    const response = await api.post("/auth/login", { email, password });

    // Log de la respuesta
    console.log("Respuesta del servidor:", response.data);

    const { token, user } = response.data.data;

    // Usamos el store para almacenar el token y el role_id
    const { setTokenAndRole } = useUserStore.getState();
    setTokenAndRole(token, user.roleId, user.id);

    console.log("Token y datos del usuario almacenados en el store:", { token, user });

    return { token, user };
  } catch (error) {
    // Log del error
    console.error(
      "Error en el inicio de sesión:",
      error.response ? error.response.data : error.message,
    );

    // Manejo de errores
    throw error.response ? error.response.data : new Error("Error en el login");
  }
};
