import { useState } from "react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen mx-auto relative overflow-hidden gap-4 px-4">
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-2">
        <h1 className="text-2xl md:text-6xl 2xl:text-7xl font-bold mb-4">
          ESTAMOS TRABAJANDO EN ALGO GENIAL
        </h1>
        <p className="mb-8">
          Suscríbete para recibir todas las novedades sobre las nuevas funcionalidades.
        </p>
        <form className="flex z-20" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow p-2 rounded-l-md outline-none border-gray-500 border"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-r-md font-bold bg-secondary text-white"
          >
            Suscríbete
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <img
          src="/cover_coming.webp"
          alt="Student with backpack"
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white to-transparent"></div>
      </div>
      <div className="absolute -bottom-10 -left-20 z-20">
        <div className="rotate-12 whitespace-nowrap">
          <div className="inline-block py-2 text-white text-2xl bg-gradient-to-r from-orange-600 to-orange-700">
            COMING SOON | COMING SOON | COMING SOON | COMING SOON | COMING SOON | COMING SOON |
            COMING SOON | COMING SOON | COMING SOON | COMING SOON |
          </div>
        </div>
        <div className="absolute -rotate-12 whitespace-nowrap left-0 bottom-40 z-10">
          <div className="inline-block py-2 text-white text-2xl bg-gradient-to-r from-orange-600 to-orange-700">
            COMING SOON | COMING SOON | COMING SOON | COMING SOON | COMING SOON | COMING SOON |
            COMING SOON | COMING SOON | COMING SOON | COMING SOON |
          </div>
        </div>
      </div>
    </div>
  );
}
