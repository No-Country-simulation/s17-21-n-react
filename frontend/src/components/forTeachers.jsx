import { forTeachersBg } from "../assets";
import { forTeachers } from "../data/forTeachers.js";

const ForTeachers = () => {
  return (
    <div className="bg-white">
      <div className="h-[179px] md:h-[329px] flex flex-col items-center justify-center md:justify-start gap-2 relative">
        <img src={forTeachersBg} alt="image" className="absolute w-full h-full object-cover" />
        <h4 className="relative z-5 text-primary font-semibold text-center md:mt-20 before:content-[''] before:w-1 before:h-1 before:inline-block before:bg-primary before:rounded-full flex items-center justify-center gap-2">
          PARA DOCENTES
        </h4>
        <h1 className="relative z-5 text-3xl font-bold text-white text-center">
          Simplifica tu Labor, Maximiza el Impacto
        </h1>
      </div>
      <div className="flex flex-col items-center gap-12 py-12 grid-cols-4 md:grid md:gap-7 max-w-[1200px] m-auto p-6 box-content md:relative md:top-[-180px] md:max-h-24 lg:max-h-18">
        {forTeachers.map((card) => (
          <div key={card.id} className="bg-background_primary rounded-[5px] p-4 max-w-80 h-full">
            <div className="h-full rounded-[5px] border-b-[5px] border-primary relative">
              <h4 className="text-[#1F2126] font-bold text-center text-2xl leading-6">
                {card.title}
              </h4>
              <p className="text-[#7D7F85] pt-9 pb-11">{card.description}</p>
              <div className="rounded-full border-[6px] border-white w-max bg-[#242424] p-5 absolute bottom-0 end-1/2 translate-y-1/2 translate-x-1/2">
                <img src={card.icon} alt="icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForTeachers;
