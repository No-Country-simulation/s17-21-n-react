import { Route, Routes } from "react-router-dom";
import DashboardStudents from "../Pages/Students/DashboardStudents";

const StudentsRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardStudents />} />
    </Routes>
  );
};

export default StudentsRoutes;
