import DashboardStudents from "../pages/DashboardStudents";
import NestedRoutes from "../../public/routes/NestedRoutes";
import CoursesByStudent from "../pages/CoursesByStudent";
import ActivitiesList from "../../teachers/components/ActivitiesList";

const studentRoutes = [
  { path: "dashboard", element: <DashboardStudents /> },
  { path: "courses", element: <CoursesByStudent /> },
  { path: "courses/:id/classes", element: <ActivitiesList /> },

  // Otras rutas específicas para estudiantes
];

const StudentsRoutes = () => {
  return <NestedRoutes routes={studentRoutes} />;
};

export default StudentsRoutes;
