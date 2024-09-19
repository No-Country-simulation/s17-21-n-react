import { quotationBg, quotationBg2, rightArrow } from "../../common/assets";

export function Quotation() {
  return (
    <div className="h-screen relative bg-black flex justify-center items-center md:h-[70vh] md:min-h-[600px]">
      <div className="absolute top-0 end-0 w-full h-full bg-black opacity-80 z-20"></div>
      <div className="w-[85px] h-[85px] md:w-[180px] md:h-[180px] bg-primary opacity-100 border-e-[10px] border-b-[10px] md:border-e-[25px] md:border-b-[25px] absolute top-0 start-0 z-20"></div>

      <img
        src={quotationBg}
        alt="background image"
        className="w-full h-full absolute object-cover z-10"
      />
      <img
        src={quotationBg2}
        alt="background image"
        className="hidden md:inline absolute top-0 start-0 w-full z-20 h-full object-contain"
      />

      <div className="flex flex-col items-center gap-4 p-5 relative z-20">
        <h2 className="text-white font-bold text-3xl md:text-[40px] text-center">
          Solicita tu Cotización Ahora
        </h2>
        <p className="text-white font-medium text-2xl md:mb-6">Llámanos al: (+54)5445400555</p>
        <button className="text-white bg-primary rounded p-3 font-medium">
          Leer más
          <img src={rightArrow} alt="" className="inline ms-4" />
        </button>
      </div>
    </div>
  );
}
