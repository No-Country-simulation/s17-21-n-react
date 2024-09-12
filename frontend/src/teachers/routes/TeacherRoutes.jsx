import NestedRoutes from "../../public/routes/NestedRoutes";
import DashboardTeachers from "../pages/DashboardTeachers";
import AttendanceControl from "../pages/AttendanceControl";
import ActivitiesList from "../components/ActivitiesList";
import MyProfile from "../pages/MyProfile";
import StudentsByTeacher from "../pages/StudentsByTeacher";
import GradesByTeacher from "../pages/GradesByTeacher";

const teacherRoutes = [
  { path: "dashboard", element: <DashboardTeachers /> },
  { path: "attendance-summary", element: <AttendanceControl /> },
  { path: "activities", element: <ActivitiesList /> },
  { path: "my-profile", element: <MyProfile />},
  { path: "grades", element: <GradesByTeacher /> },
  { path: "students", element: <StudentsByTeacher /> },
  // Otras rutas específicas para maestros
];

const TeachersRoutes = () => {
  return <NestedRoutes routes={teacherRoutes} />;
};

export default TeachersRoutes;
