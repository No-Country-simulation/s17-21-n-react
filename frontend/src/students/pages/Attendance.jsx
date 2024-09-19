/* eslint-disable react/prop-types */
import { useState } from "react";
import { attendancePerClass, classes } from "../data/attendance";
import Pagination from "../../common/components/Pagination";
import Select from "react-select";
import AttendanceButton from "../components/AttendanceButton";
import AttendanceIcon from "../components/AttendanceIcon";

const selectStyles = {
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: "8px",
    borderColor: "#0A0A0B",
    padding: "2px 8px",
    outline: state.isFocused ? "auto" : "",
  }),
};


const AttendanceRow = ({ item }) => {
  return (
    <tr className="grid grid-cols-[80px_140px_1fr] border-b border-gray-200">
      <td className={`flex items-center justify-center text-center truncate py-2.5 `}>
        {item.titulo}
      </td>
      <td className="p-2.5">
        <AttendanceButton
          className={`text-center truncate ${item.asistencia === "Presente" ? "bg-[#2BB148] text-white" : item.asistencia === "Ausente" ? "bg-[#F15050] text-white" : "bg-gray-200 text-gray-700"}`}
        >
          <AttendanceIcon item={item} />
          <span>{item.asistencia}</span>
        </AttendanceButton>
      </td>
      <td className={`p-2.5 truncate flex items-center`}>
        <span>
          {item.observaciones === "Justificada" ? (
            <div className="flex flex-row items-center gap-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 text-[#2BB148]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 12l5 5l10 -10"></path>
                <path d="M2 12l5 5m5 -5l5 -5"></path>
              </svg>
              Justificada
            </div>
          ) : item.observaciones === "Injustificada" ? (
            <div className="flex flex-row gap-4">
              <div className="flex flex-row items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 text-[#F15050]"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 9v4" />
                  <path d="M12 16v.01" />
                </svg>
                Injustificada
              </div>
              <div className="flex flex-row items-center gap-x-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 "
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                  <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                  <path d="M16 5l3 3" />
                </svg>
                Añadir
              </div>
            </div>
          ) : (
            <span>{item.observaciones ?? "Sin observaciones"}</span>
          )}
        </span>
      </td>
    </tr>
  );
};

const Attendance = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleSelectedClass = (clase) => {
    setSelectedClass(clase.value);
  };

  return (
    <div className="m-[-16px] min-h-[calc(100vh-64px)] flex flex-col justify-between md:items-end gap-8">
      <div className="w-full">
        <h1 className="text-[#495057] text-2xl font-bold p-4 mb-6 ">Mis Asistencias</h1>

        <div className="px-4">
          <h2 className="font-semibold text-lg md:font-bold md:text-2xl">Filtrar datos</h2>
          <div className="mt-4">
            <label htmlFor="class" className="font-semibold text-lg text-[#042DFF] md:text-2xl">
              Seleccionar clase
            </label>
            <Select
              id="class"
              placeholder="Seleccionar clase..."
              isSearchable={false}
              styles={selectStyles}
              options={classes}
              onChange={handleSelectedClass}
            />
          </div>
        </div>

        <div className="px-4 mt-8">
          {!selectedClass ? (
            "No seleccionaste ninguna clase"
          ) : (
            <div className="rounded-lg border border-black overflow-x-auto w-full">
              <table className="w-full border-collapse bg-white rounded-lg shadow-md">
                <tbody className="flex flex-col">
                  {attendancePerClass[selectedClass]?.map((item) => (
                    <AttendanceRow item={item} key={item.id} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="pb-4 md:pe-3">
        <Pagination />
      </div>
    </div>
  );
};

export default Attendance;
