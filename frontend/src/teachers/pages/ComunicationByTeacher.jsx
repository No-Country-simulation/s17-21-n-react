import { add, filter, reload } from "../../common/assets";
import Pagination from "../../common/components/Pagination";
import { emails, options } from "../data/comunicationByTeachers";

const ComunicationByTeacher = () => {
  return (
    <div className="grid grid-cols-[56px,1fr] sm:grid-cols-[250px,1fr] gap-2 md:gap-4 h-[calc(100vh-100px)] grid-rows-[1fr,80px] me-[-16px]">
      <div>
        <button className="bg-[#4E6BFF] text-white font-semibold rounded py-2 px-4">
          <img src={add} alt="add icon" width={24} height={24} className="inline" />
          <span className="hidden sm:inline ms-4">Correo Nuevo</span>
        </button>

        <div className="flex flex-col gap-2 mt-4">
          {options.map((option) => (
            <button className="py-2.5 px-2 sm:text-start hover:bg-slate-100" key={option.id}>
              <img
                src={option.icon}
                alt="bandeja de entrada"
                width={20}
                height={20}
                className="inline"
              />
              <span className="hidden sm:inline ms-3">{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 items-end">
        <div className="flex gap-2 px-4 w-full">
          <button className="p-2 py-1.5 bg-[#F3F4F6] rounded">
            <img src={filter} alt="filter" width={20} height={20} className="inline me-1" />
            Filtrar
          </button>
          <button className="p-2 py-1.5 bg-[#F3F4F6] rounded flex">
            <img src={reload} alt="filter" width={20} height={20} className="inline-block" />
          </button>
        </div>

        <div className="flex flex-col gap-4 h-96 flex-grow overflow-y-auto bg-red-500a p-4 w-full">
          {emails.map((email) => (
            <div
              key={email.id}
              className="border-[1px] border-border rounded-lg shadow-custom p-4 pe-4 md:pe-16 flex items-start gap-4"
            >
              <img src={email.image} alt="image" width={48} height={48}/>
              <div className="flex-grow w-1">
                <h5 className="font-semibold text-[#1F2937] truncate">{email.title}</h5>
                <p className="text-[#374151] truncate">{email.description}</p>
                <p className="text-[#6B7280] text-xs mt-1">{email.type}</p>
              </div>
              <p className="text-xs text-[#6B7280] flex-shrink-0 hidden md:inline">{email.date}</p>
            </div>
          ))}
        </div>

        <div className="me-8">
          <button className="bg-[#4E6BFF] rounded-full p-4">
            <img src={add} alt="add" width={24} height={24} />
          </button>
        </div>
      </div>

      <div className="col-span-2 flex justify-center sm:justify-end px-4">
        <Pagination />
      </div>
    </div>
  );
};

export default ComunicationByTeacher;
