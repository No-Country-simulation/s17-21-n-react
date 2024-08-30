import DashboardTeachers from "../pages/teachers/DashboardTeachers";
import NestedRoutes from "./NestedRoutes";

const teacherRoutes = [
  { path: "dashboard", element: <DashboardTeachers /> },
  // Otras rutas específicas para maestros
];

const TeachersRoutes = () => {
  return <NestedRoutes routes={teacherRoutes} />;
};

export default TeachersRoutes;
