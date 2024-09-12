import { add, filter, reload } from "../../common/assets";
import { emails, options } from "../data/comunicationByTeachers";


const ComunicationByTeacher = () => {
  return (
    <div className="grid grid-cols-[250px,1fr] gap-4 h-[calc(100vh-100px)]">
      <div>
        <button className="bg-[#4E6BFF] text-white font-semibold rounded py-2 px-4"><img src={add} alt="add icon" width={24} height={24} className="inline me-4" />Correo Nuevo</button>

        <div className="flex flex-col gap-2 mt-4">
          {options.map((option) => (
            <button className="py-2.5 px-2 text-start hover:bg-slate-100" key={option.id}>
              <img src={option.icon} alt="bandeja de entrada" width={20} height={20} className="inline me-3" />
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2 px-4">
          <button className="p-2 py-1.5 bg-[#F3F4F6] rounded"><img src={filter} alt="filter" width={20} height={20} className="inline me-1" />Filtrar</button>
          <button className="p-2 py-1.5 bg-[#F3F4F6] rounded flex"><img src={reload} alt="filter" width={20} height={20} className="inline-block" /></button>
        </div>

        <div className="flex flex-col gap-4 h-96 flex-grow overflow-y-auto bg-red-500a p-4">
          {emails.map((email) => (
            <div className="border-[1px] border-border rounded-lg shadow-custom p-4 pe-16 flex items-start gap-4">
              <img src={email.image} alt="image" width={48} height={48} className="" />
              <div className="flex-grow">
                <h5 className="font-semibold text-[#1F2937]">{email.title}</h5>
                <p className="text-[#374151]">{email.description}</p>
                <p className="text-[#6B7280] text-xs mt-1">{email.type}</p>
              </div>
              <p className="text-xs text-[#6B7280]">{email.date}</p>
            </div>
          ))}
        </div>

        {/* <div className="bg-[#4E6BFF] rounded-full p-4 absolute top-0 ">
          <img src={add} alt="add" width={24} height={24} classNeme="" />
        </div> */}

        <div className="px-4">
          PAGINATION
        </div>

      </div>
    </div>
  );
}

export default ComunicationByTeacher;