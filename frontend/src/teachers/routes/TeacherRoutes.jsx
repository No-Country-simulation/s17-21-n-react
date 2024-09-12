import NestedRoutes from "../../public/routes/NestedRoutes";
import DashboardTeachers from "../pages/DashboardTeachers";
import AttendanceControl from "../pages/AttendanceControl";
import StudentsByTeacher from "../pages/StudentsByTeacher";
import GradesByTeacher from "../pages/GradesByTeacher";
import ComunicationByTeacher from "../pages/ComunicationByTeacher";

const teacherRoutes = [
  { path: "dashboard", element: <DashboardTeachers /> },
  { path: "attendance-summary", element: <AttendanceControl /> },
  { path: "grades", element: <GradesByTeacher /> },
  { path: "students", element: <StudentsByTeacher /> },
  { path: "comunicationByTeacher", element: <ComunicationByTeacher />}
  // Otras rutas específicas para maestros
];

const TeachersRoutes = () => {
  return <NestedRoutes routes={teacherRoutes} />;
};

export default TeachersRoutes;
