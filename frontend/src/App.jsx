import { Routes, Route } from "react-router-dom";
import { AdminRoutes, StudentsRoutes, TeachersRoutes } from "./routes";
import Layout from "./components/layout/Layout";
import ErrorPage from "./components/layout/ErrorPage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import ResetPassword from "./pages/resetpassword/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import useUserStore from "./store/auth";
import AccessDeniedPage from "./components/layout/AccessDeniedPage";

const App = () => {
  const { role } = useUserStore(); // Obtener el rol directamente

  return (
    <div className="font-hind">
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/access-denied" element={<AccessDeniedPage />} />

        {/* Ruta protegida para resetear contraseña */}
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Rutas protegidas dentro del layout */}
        <Route element={<Layout userRole={role} />}>
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
