/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextInput } from "./TextInput";
import { Modal } from "./Modal";
import { roleTranslations } from "../../common/utils/roleTranslations";
import { addUser } from "../../common/services/teachersService";

export default function AddUserModal({ isOpen, onClose, role }) {
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    lastName: "",
    dni: "",
    roleId: "7a050dd6-b6f2-464d-8937-909ab28ac0d6",
  });

  const [password, setPassword] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddUser = async () => {
    try {
      const response = await addUser(newUser);
      console.log("Datos de la respuesta en handleAddUser:", response);

      if (response.data && response.data.password) {
        setPassword(response.data.password);
        setShowPasswordModal(true); // Mostrar el modal con la contraseña
      } else {
        console.error("Contraseña no encontrada en la respuesta");
      }
      console.log("Usuario agregado exitosamente");
    } catch (error) {
      console.error("Error al agregar el usuario:", error);
    }
  };

  const handleCopyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={`Agregar Nuevo ${roleTranslations[role] || role}`}
        onSubmit={(e) => {
          e.preventDefault();
          handleAddUser();
        }}
        submitText={`Agregar ${roleTranslations[role] || role}`}
        cancelText="Cancelar"
      >
        <TextInput
          label="Correo electrónico"
          name="email"
          type="email"
          value={newUser.email}
          onChange={handleInputChange}
          placeholder="Ingresa el correo"
          required
        />
        <TextInput
          label="Nombre"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          placeholder="Ingresa el nombre"
          required
        />
        <TextInput
          label="Apellido"
          name="lastName"
          value={newUser.lastName}
          onChange={handleInputChange}
          placeholder="Ingresa el apellido"
          required
        />
        <TextInput
          label="DNI"
          name="dni"
          value={newUser.dni}
          onChange={handleInputChange}
          placeholder="Ingresa el DNI"
          required
        />
      </Modal>

      {showPasswordModal && (
        <Modal
          isOpen={showPasswordModal}
          onClose={() => setShowPasswordModal(false)}
          title="Contraseña del Nuevo Usuario"
          onSubmit={() => setShowPasswordModal(false)}
          submitText="Cerrar"
        >
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <div className="flex items-center">
              <input
                type="text"
                value={password}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900"
              />
              <button
                onClick={handleCopyPassword}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Copiar
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              <strong>Recomendación:</strong> Guarda esta contraseña en un lugar seguro y no la
              compartas con otras personas. Utiliza un administrador de contraseñas para mantener tus
              credenciales seguras.
            </p>
          </div>
        </Modal>
      )}
    </>
  );
}
