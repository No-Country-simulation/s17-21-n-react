import { assignmentTurnedIn, checkCircle, libraryBooks, visibility } from "../assets";

export const forTeachers = [
  {
    id: 0,
    title: "Organiza clases con facilidad",
    description: "Crea, modifica   y  elimina materias   en segundos.",
    icon: libraryBooks,
  },
  {
    id: 1,
    title: "Registra y actualiza calificaciones ",
    description: "Con nuestra plataforma todo es mas sencillo.",
    icon: assignmentTurnedIn,
  },
  {
    id: 2,
    title: "Visualización instantánea",
    description: "Accede a listas detalladas de estudiantes inscritos.",
    icon: visibility,
  },
  {
    id: 3,
    title: "Registro ágil de asistencia",
    description: "Toma nota diaria de la asistencia de tus alumnos con facilidad.",
    icon: checkCircle,
  },
];
