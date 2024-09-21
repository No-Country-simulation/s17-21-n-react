import configureAxios from "../axios";

export const getAllClasses = async () => {
  try {
    const api = configureAxios();

    const response = await api.get("/class", {
      params: {
        sortBy: "date",
        sort: "asc",
      },
    });

    const subjects = response.data.data.content;

    return subjects;
  } catch (error) {
    console.error("Error al obtener las clases:", error);

    if (error.response) {
      console.error("Detalles de la respuesta del error:", error.response.data);
    } else {
      console.error("Error sin respuesta:", error.message);
    }

    throw error.response ? error.response.data : new Error("Error al obtener las clases");
  }
};

export const getAllClassesBySubject = async (subjectId) => {
  try {
    const api = configureAxios();

    const response = await api.get("/class", {
      params: {
        subjectId: subjectId,
        sortBy: "date",
        sort: "asc",
      },
    });

    const subjects = response.data.data.content;

    return subjects;
  } catch (error) {
    console.error("Error al obtener las clases:", error);

    if (error.response) {
      console.error("Detalles de la respuesta del error:", error.response.data);
    } else {
      console.error("Error sin respuesta:", error.message);
    }

    throw error.response ? error.response.data : new Error("Error al obtener las clases");
  }
};

export const addClass = async (classData) => {
  try {
    const api = configureAxios();
    const response = await api.post("/class", classData);
    return response;
  } catch (error) {
    console.error("Error al agregar el curso:", error);
    throw error.response ? error.response.data : new Error("Error al agregar la clase");
  }
};
