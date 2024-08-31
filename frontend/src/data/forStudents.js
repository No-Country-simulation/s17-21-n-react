import { book, list, stats, students1, students2, students3, students4 } from "../assets";

export const forStudents = [
  {
    id: 1,
    icon: book,
    photo: students1,
    title: "Acceso a Clases",
    options: [
      "Horario siempre disponible",
      "Materiales educativos accesibles",
      "Conéctate con compañeros",
    ],
  },
  {
    id: 2,
    icon: list,
    photo: students2,
    title: "Gestión de Tareas",
    options: ["Organización impecable", "Entrega eficiente", "Calificaciones claras"],
  },
  {
    id: 3,
    icon: stats,
    photo: students3,
    title: "Seguimiento Académico",
    options: [
      "Calificaciones en tiempo real",
      "Historial de asistencia completo",
      "Informes académicos detallados",
    ],
  },
  {
    id: 4,
    icon: list,
    photo: students4,
    title: "Comunicación Directa",
    options: [
      "Mensajería directa con profesores",
      "Foros de discusión para aclarar dudas",
      "Reuniones virtuales programadas",
    ],
  },
];
