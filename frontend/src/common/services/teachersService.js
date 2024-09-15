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

// export const addUser = async (userData) => {
//   try {
//     const api = configureAxios();

//     const response = await api.post("/user", userData);

//     return response.data;
//   } catch (error) {
//     throw error.response ? error.response.data : new Error("Error al agregar el usuario");
//   }
// };


export const addUser = async (userData) => {
  try {
    const api = configureAxios();

    // Realiza la solicitud POST a la API
    const response = await api.post("/user", userData);

    // Agrega un log para ver la estructura completa de la respuesta
    console.log("Respuesta completa:", response);

    // Agrega un log para ver solo los datos
    console.log("Datos de la respuesta:", response.data.data.password);

    // Devuelve los datos de la respuesta
    return response.data;
  } catch (error) {
    // Agrega un log para ver el error en caso de fallo
    console.error("Error al agregar el usuario:", error);

    throw error.response ? error.response.data : new Error("Error al agregar el usuario");
  }
};
