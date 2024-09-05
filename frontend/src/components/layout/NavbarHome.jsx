import { Link } from "react-router-dom";
import { useState } from "react";
import { rightArrow } from "../../assets";
import { handleUpClick } from "../../utils/handleUpClick";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 1, label: "Inicio", to: "#inicio" },
    { id: 2, label: "Sobre Nosotros", to: "#nosotros" },
    { id: 3, label: "Ventajas", to: "#ventajas" },
    { id: 4, label: "Eventos", to: "#eventos" },
    { id: 5, label: "Contacto", to: "#contacto" },
  ];

  return (
    <nav className="sticky w-full mx-auto bg-white shadow-md top-0 z-50">
      <section className="max-w-7xl mx-auto">
        <div className="mx-auto px-4 py-5 flex justify-between items-center">
          <div className="text-3xl font-bold text_primary">
            <Link to="/">
              Educa<span className="text-primary">Pro</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 text_primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.to}
                className="hover:text-primary transition duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text_primary focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/login">
              <button className="btn bg-primary text-white flex items-center gap-2.5 px-9 py-2 rounded" onClick={handleUpClick}>
                Acceso
                <img src={rightArrow} alt="button" width={14} height={14} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md mt-2 py-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.to}
              className="block px-4 py-2 text-gray-600 hover:bg-blue-500 hover:text-white transition duration-200"
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarHome;
