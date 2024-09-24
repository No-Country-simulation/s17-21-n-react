/* eslint-disable react/prop-types */
import { Download, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ClassDetail({ role, classDetail }) {
  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Descripción: {classDetail.description}</h3>
        <p className="text-gray-500">
          <strong>Horario:</strong> {classDetail.startTime} - {classDetail.endTime}
        </p>
        <p className="text-gray-500">
          <strong>Ubicación:</strong> {classDetail.location}
        </p>
      </div>

      <div className="flex space-x-4 mb-6">
        {classDetail.downloadUrls.length > 0 ? (
          classDetail.downloadUrls.map((url, index) => (
            <a
              key={index}
              href={url}
              className={`flex items-center space-x-2 ${
                url.endsWith(".xlsx") ? "bg-green-500" : "bg-red-500"
              } text-white px-4 py-2 rounded-md`}
              download
            >
              <Download className="h-5 w-5" />
              <span>Descargar {url.endsWith(".xlsx") ? "Excel" : "PDF"}</span>
            </a>
          ))
        ) : (
          <p>No hay archivos disponibles para descargar.</p>
        )}
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
