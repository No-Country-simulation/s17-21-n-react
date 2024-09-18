import DashboardStudents from "../pages/DashboardStudents";
import NestedRoutes from "../../public/routes/NestedRoutes";
import CoursesByStudent from "../pages/CoursesByStudent";
import ActivitiesList from "../../teachers/components/ActivitiesList";
import MyProfile from "../pages/MyProfile";
import Attendance from "../pages/Attendance";
import CalendarByStudent from "../pages/CalendarByStudent";

const studentRoutes = [
  { path: "dashboard", element: <DashboardStudents /> },
  { path: "courses", element: <CoursesByStudent /> },
  { path: "courses/:id/classes", element: <ActivitiesList /> },
  { path: "settings", element: <MyProfile /> },
  { path: "attendance", element: <Attendance /> },
  { path: "calendar", element: <CalendarByStudent /> },

  // Otras rutas específicas para estudiantes
];

const StudentsRoutes = () => {
  return <NestedRoutes routes={studentRoutes} />;
};

export default StudentsRoutes;