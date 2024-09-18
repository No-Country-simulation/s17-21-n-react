/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { TextInput } from "./TextInput";
import { Modal } from "./Modal";
import { addClass } from "../../api/services/classService";
import { getAllCourse } from "../../api/services/courseService";
import { getAllYears } from "../../api/services/yearService";

import { showToast } from "../../common/utils/toast";

export default function AddClassModal({ isOpen, onClose }) {
  const [newClass, setNewClass] = useState({
    name: "",
    date: "",
    subjectId: "",
    yearId: "",
  });

  const [subjects, setSubjects] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const fetchSubjectsAndYears = async () => {
      try {
        const [subjectsResponse, yearsResponse] = await Promise.all([
          getAllCourse(),
          getAllYears(),
        ]);
        setSubjects(subjectsResponse || []);
        setYears(yearsResponse || []);
      } catch (error) {
        console.error("Error al obtener las materias o años:", error);
      }
    };

    if (isOpen) fetchSubjectsAndYears();
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClass((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddClass = async () => {
    try {
      const response = await addClass(newClass);

      if (response.data) {
        showToast("Clase agregada con éxito!", "success");
        onClose();
      } else {
        console.error("Error al agregar la clase");
        showToast("Error al agregar la clase", "error");
      }
    } catch (error) {
      console.error("Error al agregar la clase:", error);
      showToast("Error al agregar la clase", "error");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Agregar Nueva Clase"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddClass();
      }}
      submitText="Agregar Clase"
      cancelText="Cancelar"
    >
      <TextInput
        label="Nombre de la Clase"
        name="name"
        value={newClass.name}
        onChange={handleInputChange}
        placeholder="Ingresa el nombre de la clase"
        required
      />

      <TextInput
        label="Fecha"
        name="date"
        type="date"
        value={newClass.date}
        onChange={handleInputChange}
        required
      />

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Materia</label>
        <select
          name="subjectId"
          value={newClass.subjectId}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          required
        >
          <option value="" disabled>
            Selecciona una materia
          </option>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Año</label>
        <select
          name="yearId"
          value={newClass.yearId}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          required
        >
          <option value="" disabled>
            Selecciona un año
          </option>
          {years.map((year) => (
            <option key={year.id} value={year.id}>
              {year.name}
            </option>
          ))}
        </select>
      </div>
    </Modal>
  );
}
