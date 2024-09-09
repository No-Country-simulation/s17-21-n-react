import { forTeachersBg } from "../../common/assets";
import { forTeachers } from "../data/forTeachers.js";

export function ForTeachers() {
  return (
    <div className="bg-inherit">
      <div className="h-[179px] md:h-[329px] flex flex-col items-center justify-center md:justify-start gap-2 relative">
        <img src={forTeachersBg} alt="image" className="absolute w-full h-full object-cover" />
        <h4 className="relative z-5 text-primary font-semibold text-center md:mt-20 before:content-[''] before:w-3 before:h-3 before:inline-block before:bg-primary before:rounded-full flex items-center justify-center gap-2 md:text-xl">
          PARA DOCENTES
        </h4>
        <h1 className="relative z-5 text-3xl font-bold text-white text-center md:text-[40px]">
          Simplifica tu Labor, Maximiza el Impacto
        </h1>
      </div>
      <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-7 max-w-[1200px] mx-auto p-6 md:relative md:top-[-180px]">
        {forTeachers.map((card) => (
          <div key={card.id} className="bg-background_primary rounded-lg p-6 w-full h-full">
            <div className="h-full border-b-4 border-primary relative flex flex-col justify-between">
              <h4 className="font-bold text-center text-2xl leading-6">{card.title}</h4>
              <p className="pb-6 text-base">{card.description}</p>
              <div className="rounded-full border-4 border-white w-16 h-16 bg-[#242424] p-3 absolute bottom-[-32px] left-1/2 transform -translate-x-1/2">
                <img src={card.icon} alt="icon" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
