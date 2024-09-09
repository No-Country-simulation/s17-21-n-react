import {
  rightArrow,
  banner_home,
  vectorBanner1,
  vectorBanner2,
  vectorBanner3,
  vectorBanner4,
  vectorBanner5,
  vectorBanner6,
} from "../../common/assets";

export function BannerHome() {
  return (
    <div className="relative w-full h-screen md:max-h-[890px] overflow-hidden bg-black">
      <img
        src={banner_home}
        alt="Estudiantes"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center mt-28">
        <div className="flex bg-white text-primary text-2xl font-bold px-3 mb-4 max-w-[212px] items-center gap-2">
          <div className="bg-primary size-3 rounded-full" />
          BIENVENIDO
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
          La Mejor Plataforma
          <br />
          De Gestión Educativa
        </h1>

        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Descubre una nueva manera de enseñar y aprender, con herramientas diseñadas para facilitar
          la educación en cada paso del camino.
        </p>

        <section className="flex">
          <button className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-4 text-base rounded-[4px] justify-between flex items-center gap-2 h-12 max-w-[206px]">
            Comenzar Ahora
            <img src={rightArrow} alt="button" width={14} height={14} />
          </button>
          <img className="h-auto w-[125px] opacity-40" src={vectorBanner5} alt="decorative5" />
        </section>
      </div>

      {/* Elementos decorativos SVG */}

      <img
        className="absolute top-0 right-0 h-[150px] w-[150px] opacity-40"
        src={vectorBanner1}
        alt="decorative1"
      />
      <img
        className="absolute bottom-0 right-20 h-auto w-[510px] opacity-50"
        src={vectorBanner2}
        alt="decorative2"
      />
      <img
        className="absolute top-0 left-[-20px] h-auto w-[244px] opacity-40"
        src={vectorBanner3}
        alt="decorative3"
      />
      <img
        className="absolute top-[60px] left-1/3 h-auto w-[125px] opacity-40"
        src={vectorBanner4}
        alt="decorative4"
      />
      <img
        className="absolute top-[60px] right-1/2 h-full w-auto opacity-40"
        src={vectorBanner6}
        alt="decorative4"
      />
      <svg
        className="absolute top-1/4 left-1/4 h-8 w-8 opacity-30"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" fill="currentColor" />
      </svg>
      <svg
        className="absolute bottom-1/4 right-1/4 h-12 w-12 text-blue-400 opacity-20"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="50,0 100,100 0,100" fill="currentColor" />
      </svg>
    </div>
  );
}
