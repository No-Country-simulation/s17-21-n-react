import { forTeachersBg } from "../../common/assets";
import { forTeachers } from "../data/forTeachers.js";

export function ForTeachers() {
  return (
    <div className="bg-inherit">
      <div className="h-[179px] md:h-[329px] flex flex-col items-center justify-center md:justify-start gap-2 relative">
        <img
          src={forTeachersBg}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <h4 className="relative z-10 text-primary font-semibold text-center md:mt-20 before:content-[''] before:w-3 before:h-3 before:inline-block before:bg-primary before:rounded-full flex items-center justify-center gap-2 md:text-xl">
          PARA DOCENTES
        </h4>
        <h5 className="relative z-10 text-3xl font-bold text-white text-center md:text-[40px]">
          Simplifica tu Labor, Maximiza el Impacto
        </h5>
      </div>

      <div className="grid py-12 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-7 max-w-7xl mx-auto px-4 relative md:mt-[-175px]">
        {forTeachers.map((card) => (
          <div
            key={card.id}
            className="bg-background_primary rounded-lg p-6 w-full h-full flex flex-col gap-2"
          >
            <div className="flex flex-col justify-between h-full border-b-4 border-primary relative gap-2">
              <h4 className="font-bold text-2xl text-center">{card.title}</h4>
              <p className="pb-4 text-base text-center mb-4">{card.description}</p>
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
