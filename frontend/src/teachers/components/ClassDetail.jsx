/* eslint-disable react/prop-types */
import { Download, FileText, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ClassDetail({ role }) {
  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">
          Descripción: Introducción al cálculo: límites y continuidad.
        </h3>
        <p className="text-gray-500">
          <strong>Horario:</strong> 08:00 - 09:30 AM
        </p>
        <p className="text-gray-500">
          <strong>Ubicación:</strong> Aula 1A
        </p>
      </div>

      <div className="flex space-x-4 mb-6">
        <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md">
          <Download className="h-5 w-5" />
          <span>Descargar Excel</span>
        </button>
        <button className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md">
          <FileText className="h-5 w-5" />
          <span>Descargar PDF</span>
        </button>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Tareas</h4>

        <div className="border-t pt-4 mt-4">
          <h5 className="text-md font-semibold">Tarea 1: Límites y Continuidad</h5>
          <p className="text-gray-500">
            <strong>Descripción:</strong> Resolver los problemas del libro de texto sobre límites y
            continuidad.
          </p>
          <p className="text-gray-500">
            <strong>Fecha de Entrega:</strong> 3/9/2024
          </p>
          <button className="mt-2 flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md">
            <FileText className="h-5 w-5" />
            <span>Descargar PDF</span>
          </button>
        </div>
      </div>

      {/* Mostrar botón "Comenzar clase" solo para admin y teacher */}
      {["admin", "teacher"].includes(role) && (
        <div className="mt-6">
          <Link to="/teacher/course/attendance-control">
            <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md">
              <PlayCircle className="h-5 w-5" />
              <span>Comenzar clase</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
