/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import useUserStore from "../store/auth";

const ProtectedRoute = ({ allowedRoles }) => {
  const { token, role } = useUserStore((state) => ({ token: state.token, role: state.user?.role }));

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/access-denied" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
