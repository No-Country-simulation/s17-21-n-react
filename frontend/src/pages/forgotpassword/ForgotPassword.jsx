import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
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
            <h2 className="text-3xl text-gray-900 font-semibold">¿Olvidaste tu contraseña?</h2>
            <p className="text-base text-gray-700">
              Completa tus datos para recuperar tu contraseña
            </p>
          </div>
          <div className="mt-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-base font-medium">
                  Correo electrónico
                </label>
                <div className="relative">
                  <input
                    id="email"
                    placeholder="Ingresa tu correo electrónico"
                    type="email"
                    className="bg-[#F6F6F7] pl-12 pr-4 py-5 border-gray-300 outline-none w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
                  Recuperar Contraseña
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
