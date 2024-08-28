import DashboardTeachers from "../Pages/Teachers/DashboardTeachers";
import NestedRoutes from "./NestedRoutes";

const teacherRoutes = [
  { path: "dashboard", element: <DashboardTeachers /> },
  // Otras rutas específicas para maestros
];

const TeachersRoutes = () => {
  return <NestedRoutes routes={teacherRoutes} />;
};

export default TeachersRoutes;
