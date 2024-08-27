import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { AdminRoutes, StudentsRoutes, TeachersRoutes } from './Routes';
import ErrorPage from './components/ErrorPage';

const App = () => {
  return (
    <div className='font-hind'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students/*" element={<StudentsRoutes />} />
        <Route path="/teachers/*" element={<TeachersRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path='/error' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
