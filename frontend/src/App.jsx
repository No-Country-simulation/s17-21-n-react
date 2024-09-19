import { Routes, Route } from "react-router-dom";
import { AdminRoutes, StudentsRoutes, TeachersRoutes } from "./public/routes/index";
import Layout from "./common/components/layout/Layout";
import ErrorPage from "./public/pages/ErrorPage";
import Login from "./public/pages/Login";
import ForgotPassword from "./public/pages/ForgotPassword";
import ProtectedRoute from "./common/components/ProtectedRoute";
import useUserStore from "./store/auth";
import AccessDeniedPage from "./common/components/layout/AccessDeniedPage";
import { Home } from "./public/pages/Home";
import TeamList from "./public/pages/TeamList";
import QualificationStudents from "./students/components/QualificationStudents";

const App = () => {
  const { role } = useUserStore((state) => state.user || { role: "" });

  return (
    <div className="font-hind">
      <Routes>
        {/* Rutas públicas */}
        <Route path="/calificacion" element={<QualificationStudents/>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/access-denied" element={<AccessDeniedPage />} />
        <Route path="/team" element={<TeamList />} />
        

        {/* Rutas protegidas dentro del layout */}
        <Route element={<Layout userRole={role} />}>
          {/* Ruta protegida para resetear contraseña */}
          <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
            <Route path="/student/*" element={<StudentsRoutes />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
            <Route path="/teacher/*" element={<TeachersRoutes />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Route>
        </Route>

        {/* Ruta para manejar errores 404 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
