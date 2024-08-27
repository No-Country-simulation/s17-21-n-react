import { Route, Routes } from 'react-router-dom';
import DashboardTeachers from '../Pages/Teachers/DashboardTeachers';

const TeachersRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardTeachers />} />
    </Routes>
  );
};

export default TeachersRoutes;
