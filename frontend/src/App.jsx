import { Routes, Route } from "react-router-dom";
import { AdminRoutes, StudentsRoutes, TeachersRoutes } from "./routes";
import Layout from "./components/layout/Layout";
import ErrorPage from "./components/layout/ErrorPage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import ResetPassword from "./pages/resetpassword/ResetPassword";
// import IdleTimer from "./componekcnts/IdleTimer/IdleTimer";
// import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div className="font-hind">
      {/* Se aplicará solo a las rutas protegidas */}
      {/* <IdleTimer> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* Layout para el rol según usuario (teacher, student, admin) */}
        <Route element={<Layout userRole="teacher" />}>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/student/*" element={<StudentsRoutes />} />
          <Route path="/teacher/*" element={<TeachersRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Route>
        {/* </Route> */}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* </IdleTimer> */}
    </div>
  );
};

export default App;
