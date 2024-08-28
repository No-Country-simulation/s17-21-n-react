import DashboardStudents from "../Pages/Students/DashboardStudents";
import NestedRoutes from "./NestedRoutes";

const studentRoutes = [
  { path: "dashboard", element: <DashboardStudents /> },
  // Otras rutas específicas para estudiantes
];

const StudentsRoutes = () => {
  return <NestedRoutes routes={studentRoutes} />;
};

export default StudentsRoutes;
