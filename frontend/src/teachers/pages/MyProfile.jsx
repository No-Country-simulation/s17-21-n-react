import { useEffect, useState } from "react";
import { profileLarge, trash, upload } from "../../common/assets";
import { getUserData } from "../../api/services/userProfile";
import Spinner from "../../common/utils/Spinner";
import InputForm from "../components/InputForm";
import { formatDate } from "../../common/utils/formatDate";

export default function MyProfile() {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    phone: "",
    dni: "",
    birthDate: "",
    gender: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const userData = await getUserData(token);
      const formattedUserData = {
        ...userData,
        birthDate: formatDate(userData.birthDate),
      };
      setUser(formattedUserData);
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold py-4">Mi Cuenta</h2>

      <div className="py-4 flex flex-col items-center sm:flex-row">
        <img src={profileLarge} alt="profile" width={128} height={128} className="" />
        <div className="mt-8 sm:mt-0 sm:ms-8">
          <div className="grid grid-cols-2 gap-2 max-w-80 m-auto mb-4 sm:mx-0 max-[360px]:grid-cols-1 max-[360px]:max-w-40">
            <button className="bg-[#4E6BFF] rounded-lg py-2 px-4 text-white">
              <img src={upload} alt="" className="inline me-2" />
              Upload image
            </button>
            <button className="bg-warning rounded-lg py-2 px-4 text-white">
              <img src={trash} alt="" className="inline me-2" />
              Remove
            </button>
          </div>
          <p className="opacity-60 text-center">
            Formatos admitidos: PNG, JPEG y WEBP. Tamaño máximo: 1MB.
          </p>
        </div>
      </div>

      <div className="sm:grid grid-cols-2 gap-x-4 max-w-screen-lg">
        {loading ? (
          <Spinner />
        ) : user ? (
          <>
            <InputForm label="Nombre" id="name" value={user.name} />
            <InputForm label="Apellido" id="lastname" value={user.lastName || ""} />
            <InputForm label="Telefono / Celular" id="phone" value={user.phone || ""} />
            <InputForm label="DNI" id="dni" value={user.dni || ""} type="number" />
            <InputForm label="Fecha de Nacimiento" id="birthdate" value={user.birthDate} />
            <InputForm
              label="Género"
              id="gender"
              value={user.gender === "OTHER" ? "Sin especificar" : user.gender}
            />
            <InputForm
              label="Correo electronico"
              id="email"
              value={user.email || ""}
              type="email"
            />
          </>
        ) : (
          <p>No hay datos de usuario disponibles.</p>
        )}
      </div>
      <p className="text-warning font-medium text-sm cursor-pointer">
        Solicitar cambio de información
      </p>
    </div>
  );
}
