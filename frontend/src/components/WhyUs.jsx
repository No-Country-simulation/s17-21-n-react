import { arrow, whyUs } from "../assets";

const WhyUs = () => {
  return (
    <div className="container mx-auto max-w-7xl ">
      <div className="flex flex-col lg:flex-row lg:items-center gap-14 items-center justify-center">
        <div className="flex flex-col gap-2 max-w-[570px]">
          <div className="flex flex-row items-center justify-center lg:justify-start gap-2">
            <div className="bg-primary size-3 rounded-full" />
            <h2 className="text-primary uppercase font-semibold text-2xl">porque elegirnos?</h2>
          </div>
          <h1 className="text-[#1F2126] font-bold text-3xl md:text-[40px] md:leading-[48px] text-center lg:text-left capitalize">
            La Solución Ideal para la Educación Moderna
          </h1>
          <p className="font-normal text-[#7D7F85] text-center lg:text-left text-sm lg:text-base px-2 leading-7 max-w-[570px]">
            Con EducaPro, obtienes más que una herramienta educativa. Te ofrecemos una plataforma
            intuitiva y completa diseñada para facilitar el aprendizaje y la enseñanza con máxima
            eficiencia.
          </p>
          <div className="flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start">
            <div className="background_primary py-4 px-2 lg:px-14 flex justify-center items-center max-w-[570px]">
              <p className="font-normal italic text-[#7D7F85] text-center lg:text-start text-balance text-sm lg:text-base leading-7">
                &quot;Revoluciona tu educación con tecnología avanzada, simplifica la gestión diaria
                y obtén resultados sobresalientes, para que puedas centrarte en alcanzar el
                éxito.&quot;
              </p>
            </div>
            <button className="bg-primary px-8 h-[50px] w-full max-w-52 rounded text-white font-semibold flex flex-row items-center gap-4">
              Leer Más <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
          <img src={whyUs} alt="Image" className="relative z-[1] w-72 md:w-96 lg:w-80 xl:w-auto" />
      </div>
    </div>
  );
};

export default WhyUs;
