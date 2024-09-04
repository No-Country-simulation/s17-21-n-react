import { useEffect, useState } from "react";
import { attendance } from "../../data/attendance";
import AttendanceButton from "../../components/AttendanceButton";

const AttendanceControl = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    setAttendanceData(attendance);
  }, []);

  return (
    <div className="flex-1 p-4">
      <div className="w-full mx-auto">
        <div className="text-[#1F2126] text-xl lg:text-2xl font-bold mb-6">
          Control de Asistencia
        </div>
        <p className="text-gray-500">Course ID: MAT302, Class ID: 1</p>
        <div className="relative overflow-x-auto w-full">
          <table className="w-full border-collapse bg-white rounded-lg shadow-md">
            <thead className="bg-[#0E1133] text-white font-semibold">
              <tr className="w-full">
                <th className="p-4 text-left max-w-[60px]">Código</th>
                <th className="p-4 text-left max-w-16 ">Foto</th>
                <th className="p-4 text-left min-w-10 max-w-40">Nombre</th>
                <th className="p-4 text-left max-w-40">Correo Electrónico</th>
                <th className="p-4 text-left">Asistencia</th>
                <th className="p-4 text-left">Observaciones</th>
              </tr>
            </thead>
            <tbody className="font-medium">
              {attendanceData.map((attendance) => (
                <tr key={attendance.codigo} className="border-b border-gray-200">
                  <td className="p-4 text-gray-500">{attendance.codigo}</td>
                  <td className="p-4 flex items-center justify-center">
                    <img
                      src={attendance.foto}
                      alt={attendance.nombre}
                      className="object-cover size-7 lg:size-9"
                    />
                  </td>
                  <td className="p-4 text-[#2C3E50]">{attendance.nombre}</td>
                  <td className="p-4 text-gray-500">{attendance.correo}</td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <AttendanceButton
                        className={
                          attendance.asistencia === "Presente"
                            ? "bg-[#2BB148] text-white"
                            : "bg-gray-200 text-gray-700"
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          ></path>
                        </svg>
                        <>
                          <span className="hidden md:block">Presente</span>
                          <span className="md:hidden">P</span>
                        </>
                      </AttendanceButton>
                      <AttendanceButton
                        className={
                          attendance.asistencia === "Retrasado"
                            ? "bg-[#FFAB17] text-white"
                            : "bg-gray-200 text-gray-700"
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          ></path>
                        </svg>
                        <>
                          <span className="hidden md:block">Retrasado</span>
                          <span className="md:hidden ">R</span>
                        </>
                      </AttendanceButton>
                      <AttendanceButton
                        className={
                          attendance.asistencia === "Ausente"
                            ? "bg-[#F15050] text-white"
                            : "bg-gray-200 text-gray-700"
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          ></path>
                        </svg>
                        <>
                          <span className="hidden md:block">Ausente</span>
                          <span className="md:hidden">A</span>
                        </>
                      </AttendanceButton>
                    </div>
                  </td>
                  <td className="p-4">
                    <input
                      type="text"
                      placeholder="Ej: Ausente por enfermedad"
                      className="w-full border border-gray-300 rounded-md p-2"
                      value=""
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceControl;
