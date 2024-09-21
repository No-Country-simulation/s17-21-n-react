import { useState, useEffect } from "react";
import { CirclePlus } from "lucide-react";
import Pagination from "../../common/components/Pagination";
import AddUserModal from "../components/AddUserModal";
import { getAllTeachers } from "../../api/services/teachersService";

export default function TeachersManagement() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllTeachers();
        setUsers(Array.isArray(users) ? users : []);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchUsers();
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSaveUser = (newUser) => {
    setUsers([...users, newUser]);
    closeModal();
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Gestión de Docentes</h1>
      <div className="flex justify-end mb-6">
        <button
          className="flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
          onClick={openModal}
        >
          <CirclePlus className="mr-2" />
          <span>Nuevo Docente</span>
        </button>
      </div>

      <table className="w-full border-collapse bg-white rounded-lg shadow-md">
        <thead className="bg-secondary text-white font-semibold">
          <tr>
            <th className="p-3 border">DNI</th>
            <th className="p-3 border">Nombre</th>
            <th className="p-3 border">Apellido</th>
            <th className="p-3 border">Correo</th>
            <th className="p-3 border">Fecha de Alta</th>
            <th className="p-3 border">Estado</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}>
              <td className="p-3 border text-center">{user.dni}</td>
              <td className="p-3 border">{user.name}</td>
              <td className="p-3 border">{user.lastName}</td>
              <td className="p-3 border">{user.email}</td>
              <td className="p-3 border text-center">
                {new Date(user.updatedAt).toLocaleDateString()}
              </td>
              <td className="p-3 border text-center">{user.isActive ? "Activo" : "Inactivo"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className="flex justify-end py-6">
        <Pagination />
      </section>

      <AddUserModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveUser}
        role="teacher"
      />
    </div>
  );
}
