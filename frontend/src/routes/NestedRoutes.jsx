/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../components/layout/ErrorPage";
import ResetPassword from "../pages/resetpassword/ResetPassword";

const NestedRoutes = ({ routes }) => {
  return (
    <Routes>
      {routes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default NestedRoutes;
