import DashboardStudents from "../pages/DashboardStudents";
import NestedRoutes from "../../public/routes/NestedRoutes";
import MyProfile from "../pages/MyProfile";

const studentRoutes = [
  { path: "dashboard", element: <DashboardStudents /> },
  { path: "settings", element: <MyProfile /> },
  // Otras rutas específicas para estudiantes
];

const StudentsRoutes = () => {
  return <NestedRoutes routes={studentRoutes} />;
};

export default StudentsRoutes;
