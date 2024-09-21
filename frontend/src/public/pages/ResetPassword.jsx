import { useState } from "react";
import { ArrowLeft, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { eye, eye_hide } from "../../common/assets";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8">
          <div className="flex text-4xl font-bold text_primary justify-center mb-6">
            <Link to="/" className="flex items-center">
              <span>Educa</span>
              <span className="text-primary">Pro</span>
            </Link>
          </div>
          <div className="space-y-2 text-center">
            <h2 className="text-3xl text-gray-900 font-semibold">Restablecer Contraseña</h2>
            <p className="text-base text-gray-700">Ingresa una nueva contraseña para tu cuenta</p>
          </div>
          <div className="mt-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="password" className="text-base font-medium">
                  Nueva Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="password"
                    placeholder="Ingresa tu nueva contraseña"
                    type={showPassword ? "text" : "password"}
                    className="bg-[#F6F6F7] pl-12 pr-12 py-5 border-gray-300 outline-none w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    <img
                      src={showPassword ? eye_hide : eye}
                      alt={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                      className="h-6 w-6"
                    />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="text-base font-medium">
                  Confirmar Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="confirm-password"
                    placeholder="Confirma tu nueva contraseña"
                    type={showConfirmPassword ? "text" : "password"}
                    className="bg-[#F6F6F7] pl-12 pr-12 py-5 border-gray-300 outline-none w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    <img
                      src={showConfirmPassword ? eye_hide : eye}
                      alt={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                      className="h-6 w-6"
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Link to="/login">
                  <button
                    type="button"
                    className="text-primary hover:underline flex items-center p-0 transition-all duration-200 ease-in-out"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Volver a inicio de sesión
                  </button>
                </Link>
                <button
                  type="submit"
                  className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-200 ease-in-out"
                >
                  Restablecer Contraseña
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
