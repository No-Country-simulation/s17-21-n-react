import { useEffect, useState } from "react";
import { attendance } from "../../data/attendance";
import AttendanceButton from "../../components/AttendanceButton";

const AttendanceControl = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    setAttendanceData(attendance);
  }, []);

  return (
    <div className="pt-10">
      <div className="text-[#1F2126] text-2xl lg:text-4xl font-bold mb-2">Control de Asistencias</div>
      <div className="relative overflow-x-auto w-full">
        <table className="w-full text-xs lg:text-base text-center">
          <thead className="bg-[#0E1133] text-white font-semibold">
            <tr className="w-full">
              <th className="p-2 max-w-[60px]">Código</th>
              <th className="p-2 max-w-16 ">Foto</th>
              <th className="p-2 min-w-10 max-w-40">Nombre</th>
              <th className="p-2 max-w-40">Correo Electrónico</th>
              <th className="p-2 max-w-64">Asistencia</th>
              <th className="p-2 hidden md:block">Observaciones</th>
            </tr>
          </thead>
          <tbody className="font-medium">
            {attendanceData.map((attendance) => (
              <tr key={attendance.codigo} className="border-b-2">
                <td className="max-w-[60px]">{attendance.codigo}</td>
                <td className="items-center justify-center flex">
                  <img
                    src={attendance.foto}
                    alt={attendance.nombre}
                    className="object-cover size-7 lg:size-9"
                  />
                </td>
                <td>{attendance.nombre}</td>
                <td>{attendance.correo}</td>
                <td>
                  <div className="flex justify-center space-x-1">
                    <AttendanceButton
                      backgroundColor={
                        attendance.asistencia === "Presente" ? "[#2BB148]" : "gray-300"
                      }
                    >
                      <span className="hidden md:block">Presente</span>
                      <span className="md:hidden">P</span>
                    </AttendanceButton>
                    <AttendanceButton
                      backgroundColor={
                        attendance.asistencia === "Retrasado" ? "[#FFAB17]" : "gray-300"
                      }
                    >
                      <span className="hidden md:block">Retrasado</span>
                      <span className="md:hidden">R</span>
                    </AttendanceButton>
                    <AttendanceButton
                      backgroundColor={
                        attendance.asistencia === "Ausente" ? "[#F15050]" : "gray-300"
                      }
                    >
                      <span className="hidden md:block">Ausente</span>
                      <span className="md:hidden">A</span>
                    </AttendanceButton>
                  </div>
                </td>
                <td className="hidden md:block">{attendance.observaciones || "Ninguna"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceControl;
