import {teachers1, teachers2, play, johnDoe, johnDoeSignature, greaterThanIcon} from "../assets";
import { FaBullseye } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="w-[1425px] h-[781.90px] px-[112.50px] pt-[35px] pb-[70px] bg-white justify-center items-center inline-flex">
      <div className="grow shrink basis-0 self-stretch pl-[15px] pb-10 justify-start items-start gap-[30px] inline-flex">
        <div className="w-[570px] h-[631.22px] pb-[1281.89px] flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="justify-end items-end gap-[90px] inline-flex">
            <div className="w-[313.50px] h-[294.22px] relative flex-col justify-start items-start flex">
              <img
                className="w-[313.50px] h-[294.22px] relative"
                src={teachers1}
              />
              <div className="w-[95px] h-[95px] p-[23.50px] bg-[#242424] rounded-[50px] border-2 border-white justify-center items-center inline-flex">
                <img className="w-12 h-12 relative" src={play} />
              </div>
            </div>
            <div className="w-[256.50px] h-[229.22px] relative flex-col justify-start items-start flex">
              <div className="text-[#2b4eff] text-[26px] font-bold font-['Inter'] capitalize leading-loose">
                Años de
                <br />
                Experiencia
              </div>
              <div className="p-5 origin-top-left -rotate-90 bg-[#2b4eff] justify-start items-center inline-flex">
                <div className="text-white text-[37px] font-bold font-['Inter'] capitalize leading-[44.40px]">
                  +
                </div>
                <div className="justify-center items-center gap-2.5 flex">
                  <div className="flex-col justify-center items-center inline-flex">
                    <div className="text-white text-3xl font-bold font-['Inter'] capitalize leading-10">
                      10
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[535px] h-[327px] relative">
            {/* <img
              className="w-[535px] h-[361.21px] left-[130px] top-[185.80px] absolute"
              src="https://via.placeholder.com/535x361"
            /> */}
            <img
              className="w-[535px] h-[327px] left-0 top-0 absolute"
              src={teachers2}
            />
          </div>
        </div>
        <div className="w-[570px] h-[636.90px] pb-[1228.50px] flex-col justify-start items-start gap-[25px] inline-flex">
          <div className="w-[570px] h-[231.50px] relative">
            <div className="w-[570px] h-[508px] pr-[0.48px] pb-[1728.39px] left-[-0.50px] top-[147.11px] absolute flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-[#7d7f85] text-base font-normal font-['Hind'] leading-7">
                En EducaPro, estamos comprometidos con transformar la manera en que se enseña y se
                aprende. Nuestro objetivo es proporcionar una plataforma intuitiva y poderosa que
                facilite el proceso educativo para docentes y estudiantes por igual.
              </div>
            </div>
            <div className="w-[570px] h-24 pr-[22.36px] pb-[1597.39px] left-0 top-[36.50px] absolute flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-[#1f2126] text-[40px] font-bold font-['Inter'] capitalize leading-[48px]">
                Impulsando el Futuro de la Educación
              </div>
            </div>
            <div className="left-0 top-0 absolute justify-end items-center gap-[15px] inline-flex">
              <div className="w-3 h-3 relative bg-[#2b4eff] rounded-[50px]" />
              <div className="text-[#2b4eff] text-2xl font-semibold font-['Hind'] uppercase leading-7">
                acerca de nuestra compañia
              </div>
            </div>
          </div>
          <div className="h-[380.40px] pb-[0.01px] flex-col justify-center items-center flex">
            <div className="self-stretch h-[258.40px] pr-[542.50px] justify-start items-start gap-[15px] inline-flex">
              <div className="w-[400px] h-[258.40px] px-[15px] pb-[1774.39px] flex-col justify-start items-start gap-[55px] inline-flex">
                <div className="w-[370px] h-[75.40px] pr-[610.72px] justify-start items-start gap-[30px] inline-flex">
                  <div className="w-[149.74px] h-[75.40px] relative bg-[#f4f5f9]">
                    <div className="w-[50px] h-[50px] left-[49.86px] top-[50.39px] absolute bg-[#242424] rounded-[50px]">
                      <div className="left-[12.48px] top-[12.50px] absolute text-white text-[25.20px] font-normal font-['Inter'] leading-[25px]">
                        <FaBullseye />
                      </div>
                      <div className="w-8 h-8 left-[9.64px] top-[9.11px] absolute" />
                    </div>
                    <div className="left-[25px] top-[14.80px] absolute text-[#1f2126] text-base font-bold font-['Inter'] capitalize leading-tight">
                      Nuestra Misión
                    </div>
                  </div>
                  <div className="w-[166.79px] h-[75.40px] relative bg-[#f4f5f9]">
                    <div className="w-[50px] h-[50px] left-[58.39px] top-[50.39px] absolute bg-[#242424] rounded-[50px]">
                      <div className="left-[12.48px] top-[12.50px] absolute text-white text-[25.20px] font-normal font-['Inter'] leading-[25px]">
                        <MdVisibility />
                      </div>
                      <div className="w-8 h-8 left-[9.37px] top-[9.11px] absolute" />
                    </div>
                    <div className="left-[25px] top-[14.80px] absolute text-[#1f2126] text-[17px] font-bold font-['Inter'] capitalize leading-tight">
                      Nuestra Visión
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[91px] pb-[1978.78px] flex-col justify-start items-start gap-5 flex">
                  <div className="self-stretch text-black text-base font-normal font-['Hind'] leading-[17px]">
                    Creemos en la capacidad de la tecnología para mejorar la educación. Nuestra
                    misión es ofrecer herramientas que simplifiquen la gestión académica, fomenten
                    la comunicación efectiva y enriquezcan la experiencia de aprendizaje.
                  </div>
                </div>
              </div>
              <div className="w-[170px] self-stretch flex-col justify-start items-start gap-[0px] inline-flex">
                <div className="px-[15.50px] pt-[15.61px] pb-[13.39px] bg-[#2b4eff] justify-center items-center inline-flex">
                  <div className="text-white text-base font-bold font-['Inter'] capitalize leading-tight">
                    Oferta de trabajo
                  </div>
                </div>
                <div className="w-[170px] h-[158px] px-5 pt-3.5 pb-[1875.78px] bg-[#f4f5f9] flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch h-28 pr-4 flex-col justify-start items-start flex">
                    <div className="self-stretch text-[#7d7f85] text-base font-normal font-['Rubik'] leading-7">
                      {" "}
                      ¡Únete a nosotros y marca la diferencia!
                    </div>
                  </div>
                  <div className="w-10 h-10 px-[11.50px] pt-[11px] pb-3 bg-[#2b4eff] rounded-[50px] justify-center items-center inline-flex">
                    <div className="w-[17px] h-[17px] relative flex-col justify-start items-start flex">
                      <img src={greaterThanIcon} alt="Greater than Icon" width={17} height={17} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[122px] pr-[531.50px] pt-[21px] border-t border-[#dddddd] justify-start items-start gap-10 inline-flex">
              <div className="py-[10.50px] justify-center items-center gap-[30px] flex">
                <div className="w-20 h-20 p-1 border-4 border-[#2b4eff] justify-center items-center inline-flex">
                  <img
                    className="w-[72px] h-[72px] relative"
                    src={johnDoe}
                  />
                </div>
                <div className="w-[123.61px] self-stretch pb-[2140.33px] flex-col justify-start items-start gap-[6.44px] inline-flex">
                  <div className="text-[#1f2126] text-[22px] font-bold font-['Inter'] capitalize leading-relaxed">
                    John Doe
                  </div>
                  <div className="text-[#7d7f85] text-[17px] font-normal font-['Rubik'] leading-relaxed">
                    Fundador Visionario
                  </div>
                </div>
              </div>
              <img
                className="w-[196px] h-[101px] relative"
                src={johnDoeSignature}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
