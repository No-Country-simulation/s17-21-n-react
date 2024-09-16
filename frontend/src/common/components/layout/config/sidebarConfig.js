import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ClipboardList,
  UserCheck,
  BookOpen,
  Calendar,
  MessageSquare,
  BarChart2,
  Settings,
} from "lucide-react";

// Función para generar rutas con prefijo de rol
const generateRoutes = (role, routes) =>
  routes.map((route) => ({ ...route, path: `/${role}${route.path}` }));

// Rutas comunes a todos los roles
const commonRoutes = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: BookOpen, label: "Cursos", path: "/courses" },
  { icon: ClipboardList, label: "Calificaciones", path: "/grades" },
  { icon: Calendar, label: "Calendario", path: "/calendar", notification: 1 },
  { icon: MessageSquare, label: "Comunicación", path: "/communication" },
];

// Rutas específicas por rol
const roleSpecificRoutes = {
  admin: [
    { icon: GraduationCap, label: "Alumnos", path: "/students" },
    { icon: Users, label: "Docentes", path: "/teachers" },
    { icon: UserCheck, label: "Reporte de Asistencias", path: "/attendance-summary" },
    { icon: BookOpen, label: "Material Educativo", path: "/resources" },
    { icon: BarChart2, label: "Informes", path: "/reports" },
    { icon: Settings, label: "Configuración", path: "/settings" },
  ],
  teacher: [
    { icon: GraduationCap, label: "Alumnos", path: "/students" },
    { icon: Settings, label: "Configuración", path: "/settings" },
  ],
  student: [
    { icon: Settings, label: "Configuración", path: "/settings" }
  ],
};

export const SidebarConfig = Object.fromEntries(
  Object.entries(roleSpecificRoutes).map(([role, specificRoutes]) => [
    role,
    generateRoutes(role, [...commonRoutes, ...specificRoutes]),
  ]),
);
