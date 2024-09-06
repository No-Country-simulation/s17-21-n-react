import { deniedImage, errorMan1, errorMan2 } from "../../assets";

const AccessDeniedPage = () => {
  return (
    <main className="relative grid h-screen place-items-center bg-gray-100">
      {/* Contenedor principal centrado */}
      <div className="text-center z-10">
        {/* Imagen principal centrada */}
        <img className="mx-auto mb-6 w-full h-auto max-w-[420px]" src={deniedImage} alt="Acceso Denegado" />

        {/* Texto centrado */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Acceso Denegado
        </h1>
        <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base md:text-lg">
          No tienes permiso para acceder a esta página.
        </p>

        {/* Botón centrado */}
        <div className="mt-6">
          <a
            href="/"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Volver al Inicio
          </a>
        </div>
      </div>

      {/* Imagen en la esquina izquierda (hombre apuntando) */}
      <div className="absolute bottom-8 left-4 lg:bottom-4 lg:left-1/4 lg:w-[130px] lg:h-[250px] hidden lg:block">
        <img
          className="w-full h-full object-contain"
          src={errorMan1}
          alt="Representación de acceso denegado"
        />
      </div>

      {/* Imagen en la esquina derecha (persona sentada con laptop) */}
      <div className="absolute top-[40%] right-4 lg:top-[45%] lg:right-1/4 lg:w-[100px] lg:h-[125px] hidden lg:block">
        <img
          className="w-full h-full object-contain"
          src={errorMan2}
          alt="Representación de acceso denegado"
        />
      </div>
    </main>
  );
};

export default AccessDeniedPage;
