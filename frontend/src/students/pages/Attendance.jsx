import { useState } from "react";
import { edit, tickBox } from "../../common/assets";
import { attendancePerClass, classes } from "../data/attendance";
import Pagination from "../../common/components/Pagination";
import Select from "react-select";

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

const verifyDate = (date) => {
  const actualDate = new Date();
  const classDate = new Date(date);

  return actualDate < classDate;
};

const AttendanceRow = ({ item }) => {
  return (
    <tr className="grid grid-cols-[80px_80px_1fr]">
      <td
        className={`border-[1px] border-black text-center truncate py-2.5 text-white bg-[#042DFF]`}
      >
        {item.titulo}
      </td>

      <td
        className={`border-[1px] border-black text-center truncate py-2.5 text-white ${verifyDate(item.fecha) ? "bg-[#9C9898]" : item.asistencia === "Presente" ? "bg-[#22C55E]" : "bg-[#F6161F]"}`}
      >
        {item.asistencia}
      </td>

      <td
        className={`px-2.5 border-[1px] border-black py-2.5 truncate  text-white ${verifyDate(item.fecha) ? "bg-[#9C9898]" : item.observaciones ? "bg-[#505BCF]" : "bg-[#B8C4FF]"}`}
      >
        <img src={edit} alt="edit" width={20} height={20} className="inline me-2.5" />
        <span>{item.observaciones ?? "Añadir"}</span>
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
    <div className="m-[-16px] min-h-[calc(100vh-64px)] flex flex-col justify-between items-end pb-4 pe-3">
      <div className="w-full">
        <div className="bg-gradient-to-r from-[#3440BFBF] to-[#181E59BF] p-4 mb-12 flex gap-4 items-center md:py-11">
          <img src={tickBox} alt="tick box" className="inline md:w-12 md:h-12" />
          <h2 className="inline font-semibold text-lg text-white md:font-bold md:text-5xl">
            Asistencia
          </h2>
        </div>

        <div className="px-4">
          <h4 className="font-semibold text-lg md:font-bold md:text-[28px]">Filtrar datos</h4>
          <div className="mt-6">
            <label htmlFor="class" className="font-semibold text-lg text-[#042DFF] md:text-[28px]">
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

        <div className="px-8 mt-8">
          {!selectedClass ? (
            "No seleccionaste ninguna clase"
          ) : (
            <div className="rounded-lg border-[1px] border-black overflow-hidden">
              <table className="w-full">
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
      <Pagination />
    </div>
  );
};

export default Attendance;