/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { TextInput } from "./TextInput";
import { Modal } from "./Modal";
import { addCourse } from "../../api/services/courseService";
import { getAllCategories } from "../../api/services/categoryService";
import { getAllDivisions } from "../../api/services/divisionService";
import { showToast } from "../../common/utils/toast";
import { getAllTeachers } from "../../api/services/teachersService";

export default function AddCourseModal({ isOpen, onClose }) {
  const [newCourse, setNewCourse] = useState({
    name: "",
    description: "",
    categoryId: "",
    divisionId: "",
    scheduleInit: "",
    scheduleEnd: "",
    subjectTeachers: [{ teacherId: "" }],
  });

  const [categories, setCategories] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchCategoriesAndDivisionsAndTeachers = async () => {
      try {
        const [categoriesResponse, divisionsResponse, teachersResponse] = await Promise.all([
          getAllCategories(),
          getAllDivisions(),
          getAllTeachers(),
        ]);
        setCategories(categoriesResponse || []);
        setDivisions(divisionsResponse || []);
        setTeachers(teachersResponse || []);
      } catch (error) {
        console.error("Error al obtener las categorías, divisiones o profesores:", error);
      }
    };

    if (isOpen) fetchCategoriesAndDivisionsAndTeachers();
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleTeacherChange = (e) => {
    const { value } = e.target;
    setNewCourse((prevState) => ({
      ...prevState,
      subjectTeachers: [{ teacherId: value }],
    }));
  };

  const handleAddCourse = async () => {
    try {
      const response = await addCourse(newCourse);

      if (response.data) {
        showToast("Curso agregado con éxito!", "success");
        onClose();
      } else {
        console.error("Error al agregar el curso");
        showToast("Error al agregar el curso", "error");
      }
    } catch (error) {
      console.error("Error al agregar el curso:", error);
      showToast("Error al agregar el curso", "error");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Agregar Nuevo Curso"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddCourse();
      }}
      submitText="Agregar Curso"
      cancelText="Cancelar"
    >
      <TextInput
        label="Nombre del Curso"
        name="name"
        value={newCourse.name}
        onChange={handleInputChange}
        placeholder="Ingresa el nombre del curso"
        required
      />
      <TextInput
        label="Descripción"
        name="description"
        value={newCourse.description}
        onChange={handleInputChange}
        placeholder="Ingresa la descripción"
        required
      />

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Categoría</label>
        <select
          name="categoryId"
          value={newCourse.categoryId}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          required
        >
          <option value="" disabled>
            Selecciona una categoría
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">División</label>
        <select
          name="divisionId"
          value={newCourse.divisionId}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          required
        >
          <option value="" disabled>
            Selecciona una división
          </option>
          {divisions.map((division) => (
            <option key={division.id} value={division.id}>
              {division.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Profesor</label>
        <select
          name="teacherId"
          value={newCourse.subjectTeachers[0].teacherId}
          onChange={handleTeacherChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          required
        >
          <option value="" disabled>
            Selecciona un profesor
          </option>
          {teachers.map((teacher) => (
            <option key={teacher.id} value={teacher.id}>
              {teacher.name} {teacher.lastName}
            </option>
          ))}
        </select>
      </div>

      <TextInput
        label="Hora de Inicio"
        name="scheduleInit"
        type="time"
        value={newCourse.scheduleInit}
        onChange={handleInputChange}
        required
      />
      <TextInput
        label="Hora de Fin"
        name="scheduleEnd"
        type="time"
        value={newCourse.scheduleEnd}
        onChange={handleInputChange}
        required
      />
    </Modal>
  );
}
