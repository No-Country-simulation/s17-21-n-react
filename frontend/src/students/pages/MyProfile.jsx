import { useState, useEffect } from "react";
import useUserStore from "../../store/auth";
import { upload, trash } from "../../common/assets";
import dataUserStore from "../../store/data";
import imgStore from "../../store/imgPhoto";
import { generateAvatar } from "../../common/utils/avatar";

const MyProfile = () => {
  const { user } = useUserStore();
  const { data } = dataUserStore();
  const { loadImgs, resetImgs } = imgStore();

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    phone: "",
    dni: "",
    photo: "",
    birthdate: "",
    gender: "",
    email: "",
  });

  const { initials, backgroundColor } = generateAvatar(form.name, form.lastname);

  const handleUpload = () => {
    try {
      loadImgs(user.id);
      if (user.photo) alert("Imagen cargada correctamente!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Ups!.. algo salió mal", error);
    }
  };

  const handleDelete = () => {
    try {
      resetImgs(user.id);
      setForm((prevForm) => ({
        ...prevForm,
        photo: "",
      }));
      alert("Imagen borrada correctamente");
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Ups!.. algo salió mal", error);
    }
  };

  useEffect(() => {
    setForm({
      name: user.name || "",
      lastname: user.lastName || "",
      phone: data.phone || "",
      dni: data.dni || "",
      photo: data.photo || "",
      birthdate: data.birthdate || "",
      gender: data.gender || "",
      email: user.email || "",
    });
  }, [user, data]);

  return (
    <div>
      <h2 className="text-2xl font-bold py-4">Mi Cuenta</h2>

      <div className="py-4 flex flex-col items-center sm:flex-row">
        {form.photo ? (
          <img src={form.photo} width={128} height={128} className="rounded-full" />
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
        <div className="py-3">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            placeholder="Sin informar"
            className="border-[1px] border-[#B2B0B0] rounded-lg w-full mt-2 px-4 py-[7px] bg-gray-100"
            value={form.name}
            disabled
          />
        </div>

        <div className="py-3">
          <label htmlFor="lastname">Apellido</label>
          <input
            id="lastname"
            type="text"
            placeholder="Sin informar"
            className="border-[1px] border-[#B2B0B0] rounded-lg w-full mt-2 px-4 py-[7px] bg-gray-100"
            value={form.lastname}
            disabled
          />
        </div>

        <div className="py-3">
          <label htmlFor="phone">Teléfono / Celular</label>
          <input
            id="phone"
            type="text"
            className="border-[1px] border-[#B2B0B0] rounded-lg w-full mt-2 px-4 py-[7px] bg-gray-100"
            value={form.phone}
            placeholder="Sin informar"
            disabled
          />
        </div>

        <div className="py-3">
          <label htmlFor="dni">DNI</label>
          <input
            id="dni"
            type="number"
            placeholder="Sin informar"
            className="border-[1px] border-[#B2B0B0] rounded-lg w-full mt-2 px-4 py-[7px] bg-gray-100"
            value={form.dni}
            disabled
          />
        </div>

        <div className="py-3">
          <label htmlFor="birthdate">Fecha de Nacimiento</label>
          <input
            id="birthdate"
            type="text"
            placeholder="Sin informar"
            className="border-[1px] border-[#B2B0B0] rounded-lg w-full mt-2 px-4 py-[7px] bg-gray-100"
            value={form.birthdate}
            disabled
          />
        </div>

        <div className="py-3">
          <label htmlFor="genero" className="block">
            Género
          </label>
          <input
            id="birthdate"
            type="text"
            placeholder="Sin informar"
            className="border-[1px] border-[#B2B0B0] rounded-lg w-full mt-2 px-4 py-[7px] bg-gray-100"
            value={form.gender}
            disabled
          />
        </div>

        <div className="py-3">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="Sin informar"
            className="border-[1px] border-[#B2B0B0] rounded-lg w-full mt-2 px-4 py-[7px] bg-gray-100"
            value={form.email}
            disabled
          />
        </div>
      </div>
      <p className="text-warning font-medium text-sm cursor-pointer">Solicitar cambio de correo</p>
    </div>
  );
};

export default MyProfile;
