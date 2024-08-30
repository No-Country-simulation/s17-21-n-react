import { errorImage, errorMan1, errorMan2 } from "../../assets";

const ErrorPage = () => {
  return (
    <main className="grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <img
          className="mx-auto mb-6 h-48"
          src={errorImage}
          alt="Error 404 - Pagina no encontrada"
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Por favor, intenta buscar otra página.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Volver al Inicio
          </a>
        </div>
      </div>

      <div className="absolute bottom-[2%] left-[28%] xl:block 2xl:left-[34%] hidden">
        <img className="w-64 h-64 object-contain" src={errorMan1} alt="Representacion de error" />
      </div>

      <div className="absolute bottom-[42%] right-[20%] xl:block 2xl:right-[25%] hidden">
        <img className="w-20 h-28 object-contain" src={errorMan2} alt="Representacion de error" />
      </div>
    </main>
  );
};

export default ErrorPage;
