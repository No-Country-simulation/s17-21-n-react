import DashboardAdmin from "../pages/admin/DashboardAdmin";
import AttendanceControl from "../pages/teachers/AttendanceControl";

import NestedRoutes from "./NestedRoutes";

const adminRoutes = [
  { path: "dashboard", element: <DashboardAdmin /> },
  { path: "attendance-summary", element: <AttendanceControl /> },
  // Otras rutas específicas para administradores
];

const AdminRoutes = () => {
  return <NestedRoutes routes={adminRoutes} />;
};

export default AdminRoutes;
