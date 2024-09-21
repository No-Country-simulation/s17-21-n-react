import { useState } from "react";
import { profileLarge, trash, upload } from "../../common/assets";
import Select from "react-select";

const selectStyles = {
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: "8px",
    borderColor: "#B2B0B0",
    padding: "2px 8px",
    outline: state.isFocused ? "auto" : "",
  }),
};

const MyProfile = () => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    phone: "",
    dni: "",
    birthdate: "",
    gender: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    setForm({
      ...form,
      gender: e.value,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold py-4">Mi Cuenta</h2>

      <div className="py-4 flex flex-col items-center sm:flex-row">
        <img src={profileLarge} alt="profile" width={128} height={128} className="" />
        <div className="mt-8 sm:mt-0 sm:ms-8">
          {/* <div className="flex justify-evenly mb-4 gap-1 flex-wrap sm:justify-start sm:gap-4"> */}
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
        <InputForm label="Nombre" id="name" placeholder="Sarah" onChange={handleChange} />
        <InputForm label="Apellido" id="lastname" placeholder="Smith" onChange={handleChange} />
        <InputForm label="Telefono / Celular" id="phone" onChange={handleChange} />
        <InputForm
          label="DNI"
          id="dni"
          placeholder="12345678"
          type="number"
          onChange={handleChange}
        />
        <InputForm label="Fecha de Nacimiento" id="birthdate" onChange={handleChange} />
        <div className="py-3">
          <label htmlFor="genero" className="block mb-2">
            Género
          </label>
          <Select
            id="gender"
            label="Género"
            placeholder="Seleccione un género"
            isSearchable={false}
            styles={selectStyles}
            onChange={handleSelectChange}
            options={[
              { value: "mujer", label: "Mujer" },
              { value: "hombre", label: "Hombre" },
            ]}
          />
        </div>
        <InputForm
          label="Correo electronico"
          id="email"
          placeholder="sarah.smith@educapro.edu"
          type="email"
          onChange={handleChange}
        />
      </div>
      <p className="text-warning font-medium text-sm cursor-pointer">Solicitar cambio de correo</p>
    </div>
  );
};

export default MyProfile;

const InputForm = ({ label, placeholder, type, id, onChange }) => {
  return (
    <div className="py-3">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type ?? "text"}
        placeholder={placeholder}
        className="border-[1px] border-[#B2B0B0] rounded-lg w-full mt-2 px-4 py-[7px]"
        onChange={onChange}
      />
    </div>
  );
};
