import DashboardAdmin from "../pages/DashboardAdmin";

import NestedRoutes from "../../public/routes/NestedRoutes";
import TeachersManagement from "../pages/TeachersManagement ";
import CoursesByAdmin from "../pages/CoursesByAdmin";
import ActivitiesList from "../../teachers/components/ActivitiesList";

const adminRoutes = [
  { path: "dashboard", element: <DashboardAdmin /> },
  { path: "teachers", element: <TeachersManagement /> },
  { path: "courses", element: <CoursesByAdmin /> },
  { path: "courses/:id/classes", element: <ActivitiesList /> },

  // Otras rutas específicas para administradores
];

const AdminRoutes = () => {
  return <NestedRoutes routes={adminRoutes} />;
};

export default AdminRoutes;
