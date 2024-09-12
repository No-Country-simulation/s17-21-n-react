import {
  drafts,
  email,
  profile1,
  profile2,
  profile3,
  share,
  star,
  trash2,
} from "../../common/assets";

export const options = [
  { id: 1, icon: email, label: "Bandeja de Entrada" },
  { id: 2, icon: star, label: "Destacados" },
  { id: 3, icon: share, label: "Enviados" },
  { id: 4, icon: star, label: "Importantes" },
  { id: 5, icon: drafts, label: "Borradores" },
  { id: 6, icon: trash2, label: "Papelera" },
];

export const emails = [
  {
    id: 1,
    image: profile1,
    title: "María Rodríguez",
    date: "Hace 1 hora",
    description: "Reunión de profesores el próximo viernes",
    type: "Docentes",
  },
  {
    id: 2,
    image: profile2,
    title: "Carlos Hernández",
    date: "Hace 2 horas",
    description: "Consulta sobre la tarea de matemáticas",
    type: "Estudiantes",
  },
  {
    id: 3,
    image: profile3,
    title: "Ana Morales",
    date: "Hace 4 horas",
    description: "Calendario de exámenes actualizado",
    type: "Administración",
  },
  {
    id: 4,
    image: profile1,
    title: "Lucía Gómez",
    date: "Hace 1 día",
    description: "Dudas sobre el proyecto de ciencias",
    type: "Estudiantes",
  },
  {
    id: 5,
    image: profile2,
    title: "Pedro Jiménez",
    date: "Hace 2 días",
    description: "Informe de notas del tercer trimestre",
    type: "Docentes",
  },
  {
    id: 6,
    image: profile3,
    title: "Isabel Flores",
    date: "Hace 5 días",
    description: "Solicitud de revisión de examen",
    type: "Estudiantes",
  },
];
