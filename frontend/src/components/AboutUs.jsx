import { useState } from "react";
import {
  arrowCircle,
  fabullseye,
  johnDoe,
  johnDoeSignature,
  mdvisibility,
  play,
  teachers1,
  teachers2,
} from "../assets";

const AboutUs = () => {
  const [selected, setSelected] = useState("mision");

  const handleButtonClick = (section) => {
    setSelected(section);
  };

  const contentMap = {
    mision:
      "Creemos en la capacidad de la tecnología para mejorar la educación. Nuestra misión es ofrecer herramientas que simplifiquen la gestión académica, fomenten la comunicación efectiva y enriquezcan la experiencia de aprendizaje.",
    vision:
      "Nos esforzamos por crear un entorno de aprendizaje inclusivo y accesible, donde la tecnología sea un puente hacia el conocimiento para todos, sin importar dónde se encuentren.",
  };

  return (
    <div className="container mx-auto flex justify-center">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col md:flex-row gap-14 md:gap-24 items-center">
            <div className="flex flex-row gap-1 relative items-center justify-center">
              <div className="bg-[#242424] size-[95px] rounded-full border-2 border-white flex items-center justify-center absolute md:-right-11">
                <img src={play} alt="Play icon" />
              </div>
              <img src={teachers1} alt="Imagen de Profesores" className="object-cover" />
            </div>
            <div className="flex flex-row md:flex-col items-center md:items-start gap-8">
              <div className="text-primary text-[26px] font-bold capitalize leading-8 pl-2">
                Años de <br /> Experiencia
              </div>
              <div className="p-5 -rotate-90 w-[102px] h-[85px] bg-primary flex items-center justify-center">
                <div className="flex flex-row gap-2">
                  <span className="font-bold text-white text-3xl">+</span>
                  <h5 className="font-bold text-white text-3xl">10</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-14">
            <img src={teachers2} alt="Imagen de Profesores" className="object-cover p-2 md:p-0" />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-[570px]">
          <div className="flex flex-row items-center justify-center md:justify-normal gap-2">
            <div className="bg-primary size-3 rounded-full" />
            <h2 className="text-primary uppercase font-semibold text-base lg:text-3xl">
              acerca de nuestra compañia
            </h2>
          </div>
          <h1 className="text-[#1F2126] font-bold text-2xl lg:text-[40px] text-center md:text-left lg:leading-[48px] capitalize max-w-[570px]">
            Impulsando el Futuro de la Educación
          </h1>

          <p className="font-normal text-[#7D7F85] text-pretty lg:text-left text-base px-2 leading-7 max-w-[570px]">
            En EducaPro, estamos comprometidos con transformar la manera en que se enseña y se
            aprende. Nuestro objetivo es proporcionar una plataforma intuitiva y poderosa que
            facilite el proceso educativo para docentes y estudiantes por igual.
          </p>

          <div className="flex md:flex-row justify-center gap-2 lg:pb-10">
            <div className="max-w-[400px] flex flex-col gap-8">
              <div className="flex flex-row justify-between px-4">
                <div
                  id="mision"
                  className={`relative max-w-[150px] h-[75px] pb-6 px-5 flex flex-col items-center justify-center cursor-pointer ${
                    selected === "mision" ? "bg-primary text-white" : "bg-lightGray text-[#1F2126]"
                  }`}
                  onClick={() => handleButtonClick("mision")}
                >
                  <h5 className="capitalize text-base font-bold">Nuestra misión</h5>
                  <div className="bg-[#242424] size-[50px] rounded-full flex items-center justify-center absolute -bottom-6">
                    <img src={fabullseye} alt="Bull eyes icon" />
                  </div>
                </div>

                <div
                  id="vision"
                  className={`relative max-w-[150px] h-[75px] pb-6 px-5 flex flex-col items-center justify-center cursor-pointer ${
                    selected === "vision" ? "bg-primary text-white" : "bg-lightGray text-[#1F2126]"
                  }`}
                  onClick={() => handleButtonClick("vision")}
                >
                  <h5 className="capitalize text-base font-bold">Nuestra Visión</h5>
                  <div className="bg-[#242424] size-[50px] rounded-full flex items-center justify-center absolute -bottom-6">
                    <img src={mdvisibility} alt="Eye icon" />
                  </div>
                </div>
              </div>
              <p className="text-[#242424] text-base font-normal text-pretty p-2 leading-4 h-[85px]">
                {contentMap[selected]}
              </p>
            </div>
            <div className="h-[208px] w-[170px] hidden lg:block">
              <div className="bg-primary p-4 flex items-center justify-center">
                <h4 className="text-white font-bold">Oferta de trabajo</h4>
              </div>
              <div className="bg-gray-200 p-5 h-[158px]">
                <span className="text-lg text-[#7D7F85] font-normal leading-7">
                  ¡Únete a nosotros y marca la diferencia!
                </span>
                <div className="bg-primary size-10 rounded-full flex items-center justify-center">
                  <img src={arrowCircle} alt="Arrow circle" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <hr className="border border-border max-w-[570px]" />
            <div className="flex flex-row items-center justify-center md:justify-start md:gap-2">
              <div className="flex flex-row items-center justify-center gap-2">
                <img className="size-20 object-cover border-4 border-primary" src={johnDoe} />
                <div className="flex flex-col gap-2">
                  <h4 className="text-[#1F2126] font-bold text-xl">Jhon Doe</h4>
                  <span className="text-[#7D7F85] text-sm font-normal">Fundador Visionario</span>
                </div>
              </div>
              <img
                src={johnDoeSignature}
                alt="John Doe Signature"
                className="object-cover w-32 sm:max-w-48"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
