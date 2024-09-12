import NestedRoutes from "../../public/routes/NestedRoutes";
import DashboardTeachers from "../pages/DashboardTeachers";
import AttendanceControl from "../pages/AttendanceControl";
import ActivitiesList from "../components/ActivitiesList";
import MyProfile from "../pages/MyProfile";
import StudentsByTeacher from "../pages/StudentsByTeacher";
import GradesByTeacher from "../pages/GradesByTeacher";
import CoursesByTeacher from "../pages/CoursesByTeacher";
import ComunicationByTeacher from "../pages/ComunicationByTeacher";

const teacherRoutes = [
  { path: "dashboard", element: <DashboardTeachers /> },
  { path: "attendance-summary", element: <AttendanceControl /> },
  { path: "activities", element: <ActivitiesList /> },
  { path: "settings", element: <MyProfile /> },
  { path: "grades", element: <GradesByTeacher /> },
  { path: "students", element: <StudentsByTeacher /> },
  { path: "courses", element: <CoursesByTeacher /> },
  { path: "comunicationByTeacher", element: <ComunicationByTeacher />}
  // Otras rutas específicas para maestros
];

const TeachersRoutes = () => {
  return <NestedRoutes routes={teacherRoutes} />;
};

export default TeachersRoutes;
