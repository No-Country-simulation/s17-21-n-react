/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useUserStore from "../store/auth";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { token, role } = useUserStore();
  const location = useLocation();

  // Verificar si el usuario está autenticado
  if (!token) {
    console.log("No autorizado: Usuario no autenticado.");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Verificar si el rol del usuario está en los roles permitidos
  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    console.log(`No autorizado: Rol '${role}' no permitido.`);
    return <Navigate to="/access-denied" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
