import DashboardAdmin from "../pages/DashboardAdmin";
import AttendanceControl from "../../teachers/pages/AttendanceControl";

import NestedRoutes from "../../public/routes/NestedRoutes";

const adminRoutes = [
  { path: "dashboard", element: <DashboardAdmin /> },
  { path: "attendance-summary", element: <AttendanceControl /> },
  // Otras rutas específicas para administradores
];

const AdminRoutes = () => {
  return <NestedRoutes routes={adminRoutes} />;
};

export default AdminRoutes;
