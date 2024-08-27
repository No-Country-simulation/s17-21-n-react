import { Route, Routes } from 'react-router-dom';
import DashboardAdmin from '../Pages/Admin/DashboardAdmin';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardAdmin />} />
    </Routes>
  );
};

export default AdminRoutes;
