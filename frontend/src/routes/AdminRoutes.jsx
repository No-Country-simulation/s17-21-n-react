import DashboardAdmin from "../pages/admin/DashboardAdmin";

import NestedRoutes from "./NestedRoutes";

const adminRoutes = [
  { path: "dashboard", element: <DashboardAdmin /> },
  // Otras rutas específicas para administradores
];

const AdminRoutes = () => {
  return <NestedRoutes routes={adminRoutes} />;
};

export default AdminRoutes;
