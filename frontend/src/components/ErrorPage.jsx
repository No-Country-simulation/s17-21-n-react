import errorImage from "../assets/images/404.webp";
import errorMan1 from "../assets/images/man1.webp";
import errorMan2 from "../assets/images/man2.webp";

const ErrorPage = () => {
    return (
        <>
            <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <img className="mx-auto mb-6 h-48" src={errorImage} alt="Error 404" />
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página no encontrada</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Por favor, intenta buscar otra página.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/"
                            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Volver al Inicio
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-2 left-60 xl:block hidden">
                <img
                    className="w-64 h-64 object-contain"
                    src={errorMan1}
                    alt="Side Image"
                />
            </div>

            <div className="absolute bottom-[42%] right-[20%] xl:block hidden">
                <img
                    className="w-20 h-28  object-contain"
                    src={errorMan2}
                    alt="Side Image"
                />
            </div>
        </>
    )
}

export default ErrorPage