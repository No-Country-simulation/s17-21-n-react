import { Link, useNavigate } from "react-router-dom";
import { bg, circle, dots, eye, eye_hide, man1, man2, rightArrow, zigzag } from "../../assets";
import { useState } from "react";
import Footer from "../../components/layout/Footer";
import { Mail, Lock } from "lucide-react";
import { loginService } from "../../services/authService";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [form, setForm] = useState({
    email: "administrador@test.com",
    password: "adminPassword123#",
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
    console.log("Formulario de inicio de sesión enviado con:", form);

    const result = await loginService(form.email, form.password);

    if (result.success) {
      console.log("Respuesta de login exitosa:");
      if (result.user.roleId === "student") {
        navigate("/student/");
      } else if (result.user.roleId === "teacher") {
        navigate("/teacher/");
      } else if (result.user.roleId === "admin") {
        navigate("/admin/");
      }
    } else {
      setError(result.message);
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
            <div className="bg-white rounded-[10px] px-4 py-12 sm:px-[70px] sm:py-[100px] relative z-50">
              <form onSubmit={handleLogin} className="sm:w-[376px]">
                <div className="text-start relative">
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
                    <label htmlFor="remember" className="text-sm">
                      Recuérdame
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-primary">
                    Olvidaste la contraseña?
                  </Link>
                </div>

                <button
                  className="rounded bg-primary w-full text-white p-3 mt-11 font-medium"
                  type="submit"
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
      </div>

      <Footer />
    </>
  );
};

export default Login;
