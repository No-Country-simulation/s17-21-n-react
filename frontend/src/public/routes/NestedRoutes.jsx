/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import ResetPassword from "../pages/ResetPassword";
import ComingSoonPage from "../pages/ComingSoonPage";

const NestedRoutes = ({ routes }) => {
  return (
    <Routes>
      {routes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<ComingSoonPage />} />
    </Routes>
  );
};

export default NestedRoutes;
