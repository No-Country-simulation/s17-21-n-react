import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { rightArrow } from "../../assets";
import { handleUpClick } from "../../utils/handleUpClick";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 1, label: "Inicio", to: "#home" },
    { id: 2, label: "Sobre Nosotros", to: "#about" },
    { id: 3, label: "Ventajas", to: "#advantages" },
    { id: 4, label: "Eventos", to: "#events" },
    { id: 5, label: "Contacto", to: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky w-full mx-auto top-0 z-50 my-[-50px] transition-colors duration-300 ${
        isScrolled ? "bg-white text-gray-800 shadow-md" : "bg-transparent text-white"
      }`}
    >
      <section className="max-w-7xl mx-auto">
        <div className="mx-auto px-4 py-5 flex justify-between items-center">
          <div className="text-3xl font-bold">
            <Link to="/">
              Educa<span className="text-primary">Pro</span>
            </Link>
          </div>

          <div className="hidden lg:flex space-x-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.to}
                className={`relative group ${
                  isScrolled ? "hover:text-primary text-gray-800" : "hover:text-white text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isScrolled ? "bg-primary" : "bg-white"
                  }`}
                ></span>
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <Link to="/login">
              <button
                className="btn bg-primary text-white flex items-center gap-2.5 px-9 py-2 rounded h-10"
                onClick={handleUpClick}
              >
                <p className=" hidden md:block">Acceso</p>
                <img src={rightArrow} alt="button" width={14} height={14} />
              </button>
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text_primary focus:outline-none"
            >
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
        </div>
      </section>

      {isOpen && (
        <div className="lg:hidden text-gray-700 bg-red-500">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.to}
              className="block px-4 py-2 bg-white z-50 text-gray-600 hover:bg-blue-500 hover:text-white transition duration-200"
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
