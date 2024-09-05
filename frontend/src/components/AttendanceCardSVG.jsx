import { useState } from "react";

export default function AttendanceCardSVG() {
  const [total] = useState(150); // Total de alumnos
  const [attendance] = useState(100); // Alumnos presentes
  const [absent] = useState(50); // Alumnos ausentes

  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  // Longitudes de trazo para los segmentos
  const attendanceStrokeLength = (attendance / total) * circumference;
  const absentStrokeLength = (absent / total) * circumference;

  return (
    <div className="bg-[#f4f5f9] shadow-lg rounded-lg p-6 h-auto relative">
      <h2 className="text-gray-500 font-semibold">Asistencia Diaria</h2>

      <div className="relative flex justify-center items-center mt-4">
        <svg width="100%" height="auto" viewBox="0 0 180 180" preserveAspectRatio="xMidYMid meet">
          {/* Círculo base en gris */}
          <circle cx="90" cy="90" r={radius} stroke="#E5E7EB" strokeWidth="16" fill="none" />

          {/* Segmento para asistencia (azul, grueso) */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#2563EB"
            strokeWidth="30"
            fill="none"
            strokeDasharray={`${attendanceStrokeLength} ${circumference - attendanceStrokeLength}`}
            strokeDashoffset="0"
            transform="rotate(-90 90 90)"
          />

          {/* Segmento para ausentes (verde, grueso) */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#20B799"
            strokeWidth="24"
            fill="none"
            strokeDasharray={`${absentStrokeLength} ${circumference - absentStrokeLength}`}
            strokeDashoffset={`-${attendanceStrokeLength}`}
            transform="rotate(-90 90 90)"
          />

          {/* Círculo adicional más delgado para asistencia */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#fff"
            strokeWidth="2"
            fill="none"
            strokeDasharray={`${attendanceStrokeLength} ${circumference - attendanceStrokeLength}`}
            strokeDashoffset="0"
            transform="rotate(-90 90 90)"
          />
        </svg>

        <div className="absolute text-center">
          <p className="font-semibold">
            Alumnos <br />
            EducaPro
          </p>
          <p className="text-2xl font-bold">{total}</p>
        </div>
      </div>

      <div className="flex justify-between mt-4 text-gray-700 pb-2">
        <div className="text-center">
          <p className="text-xl font-bold">{total}</p>
          <p>Total</p>
        </div>
        <div className="text-center text-[#2563EB] ">
          <p className="text-xl font-bold"> {attendance}</p>
          <p>Asistencia</p>
        </div>
        <div className="text-center  text-[#20B799] ">
          <p className="text-xl font-bold">{absent}</p>
          <p>Ausentes</p>
        </div>
      </div>
    </div>
  );
}
