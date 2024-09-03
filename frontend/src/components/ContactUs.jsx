import { telephone, mail, location, contactusBg, contactusShape1, contactusShape2, contactusShape3 } from "../assets";

const ContactUs = () => {
  return (
    <div className="w-[1425px] h-[1024px] bg-white justify-center items-center gap-1.5 inline-flex">
      <div className="w-[1425px] h-[1024px] px-[112.50px] bg-white justify-center items-center gap-1.5 flex">
        <div className="h-[526px] justify-start items-start gap-[30px] flex">
          <div className="w-[675px] relative">
            <div className="w-[675px] h-[307.50px] left-0 top-[218.50px] absolute">
              <div className="w-[183.91px] h-[50px] pl-[35px] pr-[24.91px] left-0 top-[257.50px] absolute bg-[#2b4eff] rounded-[5px] justify-end items-center inline-flex">
                <div className="text-white text-[17px] font-medium font-['Rubik'] capitalize leading-[50px]">
                  Enviar Mensaje
                </div>
              </div>
              <div className="w-[675px] h-[150px] pl-5 py-[50px] left-0 top-[70px] absolute bg-white rounded-[5px] border border-[#dddddd] justify-end items-center inline-flex">
                <div className="w-[673px] text-[#7d7f85]/50 text-sm font-normal font-['Inter'] leading-[50px]">
                  Escribe tu mensaje
                </div>
              </div>
              <div className="w-[322.50px] h-[50px] pl-5 left-[352.50px] top-0 absolute bg-white rounded-[5px] border border-[#dddddd] justify-end items-center inline-flex">
                <div className="w-[320.50px] text-[#7d7f85]/50 text-sm font-normal font-['Inter'] leading-[50px]">
                  Ingresa tu correo
                </div>
              </div>
              <div className="w-[322.50px] h-[50px] pl-5 left-0 top-0 absolute bg-white rounded-[5px] border border-[#dddddd] justify-end items-center inline-flex">
                <div className="w-[320.50px] text-[#7d7f85]/50 text-sm font-normal font-['Inter'] leading-[50px]">
                  Ingresa tu nombre
                </div>
              </div>
            </div>
            <div className="w-[675px] h-[183.50px] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
              <div className="justify-end items-center gap-[15px] inline-flex">
                <div className="w-3 h-3 relative bg-[#2b4eff] rounded-[50px]" />
                <div className="text-[#2b4eff] text-2xl font-semibold font-['Hind'] uppercase leading-7">
                  Contáctanos ahora
                </div>
              </div>
              <div className="text-[#1f2126] text-[40px] font-bold font-['Hind'] capitalize leading-[48px]">
                Estamos para asistirte
              </div>
              <div className="h-[84px] flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-[#7d7f85] text-[17px] font-normal font-['Rubik'] leading-7">
                  {" "}
                  Conéctate con nuestro equipo para obtener asistencia personalizada, resolver dudas
                  o recibir soporte en tiempo real. Estamos aquí para ayudarte en cada paso del
                  camino.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[470px] h-[526px] relative">
            <img
              className="w-[470px] h-[526px] left-0 top-0 absolute"
              src={contactusBg}
            />
            <div className="w-[470px] h-[526px] left-0 top-0 absolute opacity-90 bg-[#2d2e33]" />
            <img
              className="w-[470px] h-[526px] left-[-240px] top-[165px] absolute"
              src={contactusShape1}
            />
            <img
              className="w-[470px] h-[526px] left-[230px] top-[-180px] absolute"
              src={contactusShape2}
            />
            <img
              className="w-[470px] h-[526px] left-[340px] top-[330px] absolute"
              src={contactusShape3}
            />
            <div className="w-[85px] h-[85px] left-[375px] top-[431px] absolute opacity-40 rounded-[50px] border-8 border-white" />
            <div className="w-[85px] h-[85px] left-[415px] top-[461px] absolute opacity-40 rounded-[50px] border-8 border-white" />
            <div className="w-[310px] h-[97px] pr-[771.19px] left-[80px] top-[80px] absolute justify-start items-start gap-[30px] inline-flex">
              <div className="w-[75px] h-[75px] relative bg-[#2b4eff] rounded-[50px]">
                <div className="left-[21.48px] top-[21.50px] absolute text-white text-[32.10px] font-normal font-['Inter'] leading-loose">
                  {/*  */}
                  <img src={telephone} alt="Telephone icon" width={24} height={24} />
                </div>
              </div>
              <div className="w-[141.32px] h-[97px] pb-[7343.66px] flex-col justify-start items-start gap-[5.50px] inline-flex">
                <div className="text-white text-2xl font-bold font-['Hind'] leading-9">
                  Llámanos
                </div>
                <div className="w-[141.32px] h-14 pb-[7412.66px] flex-col justify-start items-start flex">
                  <div className="text-white text-lg font-normal font-['Rubik'] leading-7">
                    +540254615566
                  </div>
                  <div className="text-white text-lg font-normal font-['Rubik'] leading-7">
                    +546542556455
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[310px] h-[97px] pr-[759.78px] left-[80px] top-[217px] absolute justify-start items-start gap-[30px] inline-flex">
              <div className="w-[75px] h-[75px] relative bg-[#2b4eff] rounded-[50px]">
                <div className="left-[21.48px] top-[21.50px] absolute text-white text-[32.10px] font-normal font-['Inter'] leading-loose">
                  {/*  */}
                  <img src={mail} alt="Mail icon" width={24} height={16.5} />
                </div>
              </div>
              <div className="w-[152.72px] h-[97px] pb-[7480.66px] flex-col justify-start items-start gap-[5.50px] inline-flex">
                <div className="text-white text-2xl font-bold font-['Hind'] leading-9">Correo</div>
                <div className="w-[152.72px] h-14 pb-[7549.66px] flex-col justify-start items-start flex">
                  <div className="text-white text-lg font-normal font-['Hind'] leading-7">
                    educapro@educapro.edu
                  </div>
                  <div className="text-white text-lg font-normal font-['Hind'] leading-7">
                    info-educapro@educapro.edu
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[310px] h-[97px] pr-[759.16px] left-[80px] top-[354px] absolute justify-start items-start gap-[30px] inline-flex">
              <div className="w-[75px] h-[75px] relative bg-[#2b4eff] rounded-[50px]">
                <div className="left-[21.48px] top-[21.50px] absolute text-white text-[32.10px] font-normal font-['Inter'] leading-loose">
                  {/*  */}
                  <img src={location} alt="Location icon" width={24} height={30} />
                </div>
              </div>
              <div className="w-[153.35px] h-[97px] pb-[7617.66px] flex-col justify-start items-start gap-[5.50px] inline-flex">
                <div className="text-white text-2xl font-bold font-['Hind'] leading-9">
                  Dirección
                </div>
                <div className="w-[153.35px] h-14 pb-[7686.66px] flex-col justify-start items-start flex">
                  <div className="text-white text-lg font-normal font-['Hind'] leading-7">
                    20, 25 Dhaka,0123{" "}
                  </div>
                  <div className="text-white text-lg font-normal font-['Hind'] leading-7">
                    Buenos Aires-Argentina{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
