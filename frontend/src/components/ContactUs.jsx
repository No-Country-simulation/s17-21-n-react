/* eslint-disable react/prop-types */
import {
  telephone,
  mail,
  location,
  contactusBg,
  contactusShape1,
  contactusShape2,
  contactusShape3,
  rings,
} from "../assets";
import { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center bg-white py-12 md:py-60">
      <div className="max-w-7xl w-full h-auto flex flex-col md:flex-row gap-7 px-4">
        {/* Left Section */}
        <div className="w-full lg:w-2/3">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <div className="text-primary text-lg lg:text-xl font-semibold uppercase">
                Contáctanos ahora
              </div>
            </div>
            <h1 className="text-[#1f2126] text-3xl lg:text-4xl font-bold capitalize">
              Estamos Para Asistirte
            </h1>
            <p className="text-[#7d7f85] text-base lg:text-lg leading-7">
              Conéctate con nuestro equipo para obtener asistencia personalizada, resolver dudas o
              recibir soporte en tiempo real. Estamos aquí para ayudarte en cada paso del camino.
            </p>
          </div>

          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              <div className="w-full lg:w-1/2">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre"
                  className="w-full p-4 bg-white border border-[#dddddd] rounded-md text-sm text-[#7d7f85] focus:outline-none focus:border-[#2b4eff]"
                  required
                />
              </div>
              <div className="w-full lg:w-1/2">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Ingresa tu correo"
                  className="w-full p-4 bg-white border border-[#dddddd] rounded-md text-sm text-[#7d7f85] focus:outline-none focus:border-[#2b4eff]"
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje"
                className="w-full h-36 p-4 bg-white border border-[#dddddd] rounded-md text-sm text-[#7d7f85] focus:outline-none focus:border-[#2b4eff]"
                required
              />
            </div>
            <button
              type="submit"
              className="flex w-full lg:w-1/3 p-4 bg-primary h-12 text-white rounded-md font-medium capitalize items-center justify-center"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-1/3 p-16 md:p-8 flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${contactusBg})` }}
          />
          <div className="absolute inset-0 bg-black opacity-80" />

          {/* Shapes */}
          <img src={contactusShape1} alt="Shape 1" className="absolute bottom-0 left-0 w-60 h-60" />
          <img src={contactusShape2} alt="Shape 2" className="absolute top-0 right-0 w-60 h-60" />
          <img
            src={contactusShape3}
            alt="Shape 3"
            className="absolute bottom-0 right-0 w-32 h-32"
          />

          <img src={rings} alt="rings" className="absolute bottom-0 right-0 w-[85px] h-[85px]" />

          <div className="relative z-10 space-y-10 text-white">
            <ContactInfo
              icon={telephone}
              title="Llámanos"
              details={["+540254615566", "+546542556455"]}
            />
            <ContactInfo
              icon={mail}
              title="Correo"
              details={["educapro@educapro.edu", "info-educapro@educapro.edu"]}
            />
            <ContactInfo
              icon={location}
              title="Dirección"
              details={["20, 25 Dhaka,0123", "Buenos Aires-Argentina"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, title, details }) => (
  <div className="flex items-start space-x-4">
    <div className="w-20 h-20 bg-primary rounded-full flex justify-center items-center">
      <img src={icon} alt={`${title} icon`} className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-sm">
          {detail}
        </p>
      ))}
    </div>
  </div>
);

export default ContactUs;
