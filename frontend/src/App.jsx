import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { AdminRoutes, StudentsRoutes, TeachersRoutes } from "./Routes";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <div className="font-hind bg-background_primary">
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Layout para el rol según usuario (teacher, student, admin) */}
        <Route element={<Layout userRole="admin" />}>
          <Route path="/student/*" element={<StudentsRoutes />} />
          <Route path="/teacher/*" element={<TeachersRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
