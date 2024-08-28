import { Link, useLocation } from "react-router-dom";
import { btn, facebook, pinterest, twitter } from "../assets";
import footerLinks from "../utils/data";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="w-full bg-secondary">
      <section className="container mx-auto max-w-7xl flex flex-col lg:flex-row justify-between text-white px-6 py-10 gap-8">
        <div className="font-hind flex flex-col gap-[30px]">
          <h1 className="text-white font-bold text-4xl leading-6">EducaPro</h1>
          <p className="text-[#A1A2AB] font-normal text-base max-w-64">
            Optimiza la gestión de tus cursos y profesores. Simplifica la
            administración educativa con nuestra plataforma integral.
          </p>
          <div className="flex flex-row gap-3.5">
            <img src={facebook} alt="Facebook Icon" width={44} height={44} />
            <img src={twitter} alt="Twiiter Icon" width={44} height={44} />
            <img src={pinterest} alt="Pinterest Icon" width={44} height={44} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-5 w-44">
              <h3 className="font-bold text-xl capitalize">{section}</h3>
              <ul className="flex flex-col gap-1 text-[#A1A2AB] leading-6 text-base">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className={["hover:text-white hover:font-semibold",
                        location.pathname === link.href
                          ? "text-white font-semibold"
                          : "",].join(" ")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-5 w-80">
            <h1 className="font-bold text-xl">Suscribete</h1>
            <div className="relative w-full">
              <input
                type="text"
                id="subscribe"
                className="block w-full max-w-72 h-[59px] px-8 py-4 text-sm text-black/50 outline-none bg-white rounded-l-[4px]"
                placeholder="Ingresa tu correo..."
                required
              />
              <button type="submit" className="absolute top-0 end-0">
                <img src={btn} alt="button" width={70} height={60} />
                <span className="sr-only">Subscribe</span>
              </button>
            </div>
            <p className="max-w-72 text-[#83848A] text-sm leading-5">
              Recibe las últimas noticias y actualizaciones directamente en tu
              bandeja.
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row py-10 items-center justify-center gap-1 leading-6 font-hind font-normal text-sm text-[#83848A] border-t border-[#1C1F3F]">
        <p>
          © {new Date().getFullYear()} EducaPro, Todos los derechos reservados.
        </p>
        <p>Equipo: s17-n-react-node</p>
      </div>
    </footer>
  );
};

export default Footer;
