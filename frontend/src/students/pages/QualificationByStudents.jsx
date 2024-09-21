import { useState } from "react";
import GradesIcon from "../components/GradesIcon";
import { Eye, EyeOff } from "lucide-react";

export default function QualificationByStudents() {
  const [selectedCourse, setSelectedCourse] = useState("Seleccionar curso");

  const grades = [
    { id: 1, date: "02-01-2024", name: "Tarea 1", grade: 10, status: "completed" },
    { id: 2, date: "05-01-2024", name: "Tarea 2", grade: 8, status: "completed" },
    { id: 3, date: "10-01-2024", name: "Tarea 3", grade: 4, status: "failed" },
    { id: 4, date: "20-01-2024", name: "Tarea 4", grade: 9, status: "completed" },
    { id: 5, date: "01-02-2024", name: "Tarea 5", grade: 8, status: "completed" },
    { id: 6, date: "10-02-2024", name: "Examen Parcial", grade: 0, status: "upcoming" },
    { id: 7, date: "18-02-2024", name: "Tarea 6", grade: 0, status: "upcoming" },
    { id: 8, date: "25-02-2024", name: "Tarea 7", grade: 0, status: "upcoming" },
    { id: 9, date: "05-03-2024", name: "Tarea 8", grade: 0, status: "upcoming" },
    { id: 10, date: "12-03-2024", name: "Tarea 9", grade: 0, status: "upcoming" },
    { id: 11, date: "20-03-2024", name: "Tarea 10", grade: 0, status: "upcoming" },
    { id: 12, date: "30-03-2024", name: "Examen Final", grade: 0, status: "upcoming" },
  ];

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Mis Calificaciones</h1>
      <h2 className="text-lg md:text-xl mb-2 text-gray-700">Filtrar datos</h2>
      <div className="mb-4">
        <label htmlFor="course-select" className="block text-sm font-medium text-blue-600 mb-1">
          Seleccionar curso
        </label>
        <div className="relative">
          <select
            id="course-select"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:bg-white focus:border-primary"
          >
            <option>Seleccionar curso</option>
            <option>Curso 1</option>
            <option>Curso 2</option>
            <option>Curso 3</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-2 md:px-4 text-left">Fecha</th>
              <th className="py-2 px-2 md:px-4 text-left">Actividad</th>
              <th className="py-2 px-2 md:px-4 text-left">Calificación</th>
              <th className="py-2 px-2 md:px-4 text-left hidden sm:table-cell">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (
              <tr key={grade.id} className="border-b">
                <td className="py-2 px-2 md:px-4">{grade.date}</td>
                <td className="py-2 px-2 md:px-4">{grade.name}</td>
                <td
                  className={`flex gap-2 py-2 px-2 md:px-4 justify-start items-center ${
                    grade.status === "upcoming"
                      ? "text-gray-400"
                      : grade.grade > 5
                        ? "text-green-500"
                        : "text-red-500"
                  }`}
                >
                  <GradesIcon item={grade} />
                  {grade.status === "upcoming" ? "Próxima" : grade.grade}
                </td>
                <td className="py-2 px-2 md:px-4 text-center hidden sm:table-cell">
                  {grade.status === "upcoming" ? (
                    <button className="flex items-center justify-start w-full gap-2">
                      <EyeOff className="text-secondary_hover" />
                      Próximamente
                    </button>
                  ) : (
                    <button className="flex items-center justify-start w-full gap-2">
                      <Eye className="text-secondary_hover" />
                      Ver correcciones
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
