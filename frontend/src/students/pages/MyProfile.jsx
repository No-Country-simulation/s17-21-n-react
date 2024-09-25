import { useState, useEffect } from "react";
import { upload, trash } from "../../common/assets";
import imgStore from "../../store/imgPhoto";
import { generateAvatar } from "../../common/utils/avatar";
import Spinner from "../../common/utils/Spinner";
import InputForm from "../../teachers/components/InputForm";
import { getUserData } from "../../api/services/userProfile";
import { formatDate } from "../../common/utils/formatDate";
import { showToast } from "../../common/utils/toast";

const MyProfile = () => {
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
  const { loadImgs, resetImgs } = imgStore();
  const { initials, backgroundColor } = generateAvatar(user.name, user.lastname);

  const handleUpload = () => {
    try {
      loadImgs(user.id);
      if (user.photo) showToast("Imagen cargada correctamente!");
    } catch (error) {
      console.error("Error uploading image:", error);
      showToast("Ups!.. algo salió mal", error);
    }
  };

  const handleDelete = () => {
    try {
      resetImgs(user.id);
      setUser((prevForm) => ({
        ...prevForm,
        photo: "",
      }));
      showToast("Imagen borrada correctamente");
    } catch (error) {
      console.error("Error deleting image:", error);
      showToast("Ups!.. algo salió mal", error);
    }
  };

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
        {user.photo ? (
          <img src={user.photo} width={128} height={128} className="rounded-full" />
        ) : (
          <div
            className="w-[128px] h-[128px] rounded-full flex items-center justify-center"
            style={{ backgroundColor }}
          >
            <span className="text-white font-bold text-5xl">{initials}</span>
          </div>
        )}

        <div className="mt-8 sm:mt-0 sm:ms-8">
          <div className="grid grid-cols-2 gap-2 max-w-80 m-auto mb-4 sm:mx-0 max-[360px]:grid-cols-1 max-[360px]:max-w-40">
            <label className="bg-[#4E6BFF] rounded-lg py-2 px-4 text-white cursor-pointer">
              <img src={upload} alt="img" className="inline me-2" />
              Subir imagen
              <input
                type="file"
                accept="image/png, image/jpeg, image/webp"
                onChange={handleUpload}
                className="hidden"
              />
            </label>
            <button className="bg-warning rounded-lg py-2 px-4 text-white" onClick={handleDelete}>
              <img src={trash} alt="trash icon" className="inline me-2" />
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
            <div className="flex-flex-col gap-2">
              <InputForm
                label="Correo electronico"
                id="email"
                value={user.email || ""}
                type="email"
              />
              <p className="text-warning font-medium text-sm cursor-pointer">
                Solicitar cambio de correo
              </p>
            </div>
          </>
        ) : (
          <p>No hay datos de usuario disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
