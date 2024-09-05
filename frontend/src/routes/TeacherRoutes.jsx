import DashboardTeachers from "../pages/teachers/DashboardTeachers";
import AttendanceControl from "../pages/teachers/AttendanceControl";
import NestedRoutes from "./NestedRoutes";

const teacherRoutes = [
  { path: "dashboard", element: <DashboardTeachers /> },
  { path: "attendance-summary", element: <AttendanceControl /> },
  // Otras rutas específicas para maestros
];

const TeachersRoutes = () => {
  return <NestedRoutes routes={teacherRoutes} />;
};

export default TeachersRoutes;
