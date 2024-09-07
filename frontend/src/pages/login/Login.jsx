import { Link, useNavigate } from "react-router-dom";
import { bg, circle, dots, eye, eye_hide, man1, man2, rightArrow, zigzag } from "../../assets";
import { useState } from "react";
import Footer from "../../components/layout/Footer";
import { Mail, Lock } from "lucide-react";
import { loginService } from "../../services/authService";
import { handleUpClick } from "../../utils/handleUpClick";

const users = [
  { email: "administrador@test.com", password: "adminPassword123#", role: "admin" },
  { email: "sarah.smith@educapro.edu", password: "OsWk26Dj", role: "teacher" },
  { email: "john.doe@gmail.com", password: "5QLKCu8y", role: "student" },
];

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await loginService(form.email, form.password);
      const role = result.user?.role.toLowerCase();

      const routes = {
        student: "/student/dashboard",
        teacher: "/teacher/dashboard",
        admin: "/admin/dashboard",
      };

      const route = routes[role];
      if (route) {
        setTimeout(() => navigate(route), 300);
      } else {
        setError("Unknown role");
      }
    } catch (error) {
      setError("An error occurred during login");
      console.error("Login error:", error);
    }
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    const selectedUser = users.find((user) => user.role === selectedRole);
    if (selectedUser) {
      setForm({
        ...form,
        email: selectedUser.email,
        password: selectedUser.password,
        role: selectedUser.role,
      });
    } else {
      setForm({
        ...form,
        email: "",
        password: "",
        role: selectedRole,
      });
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <section className="bg-white shadow-md">
          <nav className="flex mx-auto justify-between w-full py-5 px-4 max-w-7xl">
            <div className="text-3xl font-bold text_primary">
              <Link to="/">
                Educa<span className="text-primary">Pro</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              <Link to="/login">
                <button className="btn bg-primary text-white flex items-center gap-2.5 px-9 py-2 rounded">
                  Acceso
                  <img src={rightArrow} alt="button" width={14} height={14} />
                </button>
              </Link>
            </div>
          </nav>
        </section>

        <div className="flex items-center text-center pt-16 pb-4">
          <div className="w-full m-2.5 sm:w-min sm:m-auto relative">
            <div className="hidden lg:inline">
              <img
                src={bg}
                alt="bg"
                width={624}
                height={680}
                className="absolute max-w-min top-[-40px]"
              />
              <img
                src={man1}
                alt="man1"
                width={130}
                height={250}
                className="absolute top-1/2 start-[-200px]"
              />
              <img
                src={man2}
                alt="man2"
                width={100}
                height={123}
                className="absolute top-1/3 end-[-150px]"
              />
              <img
                src={dots}
                alt="dots"
                width={33}
                height={63}
                className="absolute bottom-3/4 right-[-60px]"
              />
              <img
                src={zigzag}
                alt="zigzag"
                width={32}
                height={17}
                className="absolute bottom-3/4 start-[-100px]"
              />
              <img
                src={circle}
                alt="circle"
                width={25}
                height={20}
                className="absolute top-10 right-[-100px]"
              />
            </div>

            <h2 className="text-[40px] font-bold mb-12">Iniciar Sesión</h2>
            <div className="rounded-[10px] px-4 py-12 sm:px-[70px] sm:py-[100px] relative z-50 shadow-md">
              <form onSubmit={handleLogin} className="sm:w-[376px]">
                <div className="text-start relative mb-4">
                  <label htmlFor="role" className="text-secondary block font-medium pb-3">
                    Selecciona un rol (Apartado solo para pruebas)
                  </label>
                  <select
                    id="role"
                    value={form.role}
                    onChange={handleRoleChange}
                    className="bg-[#F6F6F7] px-4 py-2 border-gray-300 outline-none w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="other">Other</option>
                    {users.map((user, index) => (
                      <option key={index} value={user.role}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-start relative mb-4">
                  <label htmlFor="email" className="text-secondary block font-medium pb-3">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={form.email}
                      placeholder="Ingresa tu correo"
                      className="bg-[#F6F6F7] px-12 py-5 border-gray-300 outline-none w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      onChange={handleChange}
                      required
                    />
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="text-start relative mt-1">
                  <label htmlFor="password" className="text-secondary block font-medium pb-3">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      name="password"
                      value={form.password}
                      placeholder="Ingresa tu contraseña"
                      className="bg-[#F6F6F7] px-12 py-5 border-gray-300 outline-none w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      onChange={handleChange}
                      required
                    />
                    <button onClick={togglePasswordVisibility} className="absolute end-2 top-5 p-1">
                      {passwordVisible ? (
                        <img src={eye_hide} alt="hide password" height={24} width={24} />
                      ) : (
                        <img src={eye} alt="show password" height={24} width={24} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-2.5 flex justify-between">
                  <div className="flex items-center gap-1.5 text-[#6D6E75]">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      checked={form.remember}
                      onChange={handleChecked}
                    />
                    <label htmlFor="remember">Recuérdame</label>
                  </div>
                  <Link to="/forgot-password" className="text-primary">
                    Olvidaste la contraseña?
                  </Link>
                </div>

                <button
                  className="rounded bg-primary w-full text-white p-3 mt-11 font-medium"
                  type="submit"
                  onClick={handleUpClick}
                >
                  Iniciar Sesión
                </button>
                {error && (
                  <div className="text-red-500 mt-4">
                    {typeof error === "string" ? error : "Login failed. Try Again."}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
