import { useEffect, useState } from "react";
import { attendance } from "../../data/attendance";
import AttendanceButton from "../../components/AttendanceButton";
import { clock, circleCheck, circleX } from "../../assets";

const AttendanceControl = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    setAttendanceData(attendance);
  }, []);

  return (
    <div className="flex-1 p-4">
      <div className="w-full mx-auto">
        <div className="text-[#1F2126] text-xl lg:text-2xl font-bold mb-6">
          Control de Asistencias
        </div>
        <div className="relative overflow-x-auto w-full">
          <table className="w-full border-collapse bg-white rounded-lg shadow-md">
            <thead className="bg-[#0E1133] text-white font-semibold">
              <tr className="w-full">
                <th className="p-4 text-left max-w-[60px]">Código</th>
                <th className="p-4 text-left max-w-16 ">Foto</th>
                <th className="p-4 text-left min-w-10 max-w-40">Nombre</th>
                <th className="p-4 text-left max-w-40">Correo Electrónico</th>
                <th className="p-4 text-left">Asistencia</th>
                <th className="p-4 text-left hidden md:block">Observaciones</th>
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
                    <div className="flex space-x-1">
                      <AttendanceButton
                        backgroundColor={
                          attendance.asistencia === "Presente" ? "[#2BB148] text-white" : "gray-200"
                        }
                        icon={
                          <img src={circleCheck} alt="Check" className="size-4 hidden md:block" />
                        }
                        status={
                          <>
                            <span className="hidden md:block">Presente</span>
                            <span className="md:hidden">P</span>
                          </>
                        }
                      />
                      <AttendanceButton
                        backgroundColor={
                          attendance.asistencia === "Retrasado"
                            ? "[#FFAB17] text-white"
                            : "gray-200"
                        }
                        icon={<img src={clock} alt="Clock" className="size-4 hidden md:block" />}
                        status={
                          <>
                            <span className="hidden md:block">Retrasado</span>
                            <span className="md:hidden">R</span>
                          </>
                        }
                      />
                      <AttendanceButton
                        backgroundColor={
                          attendance.asistencia === "Ausente" ? "[#F15050] text-white" : "gray-200"
                        }
                        icon={<img src={circleX} alt="X" className="size-4 hidden md:block" />}
                        status={
                          <>
                            <span className="hidden md:block">Ausente</span>
                            <span className="md:hidden">A</span>
                          </>
                        }
                      />
                    </div>
                  </td>
                  <td className="hidden md:block p-4">{attendance.observaciones || "Ninguna"}</td>
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
