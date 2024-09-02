/* eslint-disable react/prop-types */
import { LockIcon } from "lucide-react";
import { profile } from "../../assets";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function LockScreen({ onUnlock }) { 
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [userData, setUserData] = useState({ name: "", profilePicture: profile });

  useEffect(() => {
    axios
      .get("/api/user/profile")
      .then((response) => {
        setUserData({
          name: response.data.name || "Sara Smith",
          profilePicture: response.data.profilePicture || profile,
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (password.trim() === "1234") { 
      setIsPasswordValid(true);
      onUnlock();
    } else {
      setIsPasswordValid(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-[999] backdrop-blur-sm backdrop-brightness-75">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="py-6 space-y-4">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-primary text-white p-2 rounded-full mb-6">
              <LockIcon className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold text_primary">
              <Link to="/">
                Educa<span className="text-primary">Pro</span>
              </Link>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-center">Pantalla Bloqueada</h3>
          <p className="text-sm text-gray-600 text-center">
            Ingresa tu contraseña para desbloquear el acceso.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center pb-6 space-y-4 px-6">
          <img
            src={userData.profilePicture}
            alt="Perfil"
            className="rounded-full border-4 border-primary"
            width={80}
            height={80}
          />
          <h4 className="text-xl font-semibold">Hola, {userData.name}</h4>
          <div className="w-full space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${!isPasswordValid ? "border-warning" : ""}`}
              required
            />
            {!isPasswordValid && (
              <p className="text-warning text-xs mt-1">Contraseña incorrecta. Inténtalo de nuevo.</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-secondary_hover"
          >
            Desbloquear
          </button>
        </form>
        <div className="flex flex-col items-center p-6 space-y-2 bg-gray-100 border-t">
          <p className="text-sm text-center">
            ¿No eres tú?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Iniciar sesión con otra cuenta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
