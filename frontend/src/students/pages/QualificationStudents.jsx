import { useState } from "react";
import { ChevronDown } from "lucide-react";

const QualificationStudents = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="mt-10 justify-start flex-row w-auto h-auto ml-96 mr-10 text-white p-8 md:flex-col md:items-center md:mx-2 md:w-auto md:p-2 sm:flex-col sm:items-center sm:mx-2 sm:w-auto sm:p-2">
        <svg
          className=" md:text-center md:w-auto md:mx-auto sm:text-center sm:w-auto sm:mx-auto"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.94 19.5L12 17.77L9.06001 19.5L9.84001 16.16L7.25001 13.92L10.66 13.63L12 10.5L13.34 13.63L16.75 13.92L14.16 16.16M20 2H4.00001V4L8.86001 7.64C7.16442 8.36359 5.77077 9.65057 4.91475 11.2833C4.05873 12.916 3.79287 14.7943 4.16215 16.6005C4.53143 18.4067 5.51317 20.0299 6.94135 21.1956C8.36952 22.3613 10.1565 22.998 12 22.998C13.8435 22.998 15.6305 22.3613 17.0587 21.1956C18.4869 20.0299 19.4686 18.4067 19.8379 16.6005C20.2071 14.7943 19.9413 12.916 19.0853 11.2833C18.2293 9.65057 16.8356 8.36359 15.14 7.64L20 4M18 15C18.0005 16.1363 17.6784 17.2493 17.0711 18.2097C16.4638 19.1701 15.5962 19.9382 14.5694 20.4248C13.5426 20.9114 12.3987 21.0964 11.2709 20.9584C10.143 20.8203 9.07757 20.3648 8.19847 19.6448C7.31937 18.9249 6.66277 17.9701 6.30507 16.8916C5.94737 15.8131 5.90327 14.6552 6.1779 13.5526C6.45253 12.4501 7.03461 11.4481 7.85641 10.6634C8.6782 9.87869 9.70593 9.34347 10.82 9.12C11.5985 8.95995 12.4015 8.95995 13.18 9.12C14.5389 9.39258 15.7616 10.1272 16.6402 11.1991C17.5189 12.271 17.9994 13.614 18 15ZM12.63 7H11.37L7.37001 4H16.71L12.63 7Z"
            fill="white"
          />
        </svg>
        <h1 className="pl-4 text-6xl md:items-center md:text-center md:mx-auto md:w-auto md:p-2 sm:items-center sm:text-center sm:mx-auto sm:w-auto sm:p-2">
          Calificaciones
        </h1>
      </div>
      <div className="mt-8 ml-96 md:text-left md:mx-2 md:w-auto font-extrabold text-4xl pl-12  sm:text-left sm:mx-2 sm:w-auto">
        <h2 className="text-black pt-8">Filtrar datos</h2>
        <h2 className="text-primary pt-8">Seleccionar Clase</h2>
      </div>
      <div className="flex  rounded-xl border-black w-auto pl-10 ml-96 mt-6 p-4 border border-b-1 mr-10 md:flex-col md:text-center md:mx-2 md:w-auto md:p-2 sm:flex-col sm:text-center sm:mx-2 sm:w-auto sm:p-2">
        <button
          className="flex flex-row items-center justify-between w-full pt-2 text-left mr-4 pl-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lightGray text-xl text-left">Seleccionar clase</span>
          <ChevronDown className="text-right text-xl" />
        </button>
      </div>
      <div className="ml-96 mr-10 mt-10 md:flex-col md:items-center md:mx-auto md:w-auto md:p-2 sm:flex-col sm:items-center sm:mx-auto sm:w-auto sm:p-2">
        <div className="w-full grid grid-cols-3 border border-black ">
          <div className="w-full text-white text-center font-bold text-xl gap-1">
            <p className="bg-primary p-4 border border-black">Entrega 1</p>
            <p className="bg-primary p-4 border border-black">Entrega 2</p>
            <p className="bg-primary p-4 border border-black"> Entrega 3</p>
            <p className="bg-primary p-4 border border-black"> Entrega 4</p>
            <p className="bg-lightGray p-4 border border-black"> Entrega 5</p>
            <p className="bg-lightGray p-4 border border-black"> Entrega 6</p>
          </div>
          <div className="w-full gap-2 items-center">
            <p className="bg-badge_green text-white justify-between flex flex-row border font-bold text-xl border-black p-4">
              <svg
                className="text-left pl-0.5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 16.914L6.293 12.207L7.707 10.793L11 14.086L20.675 4.411C20.318 3.864 19.702 3.5 19 3.5H5C3.895 3.5 3 4.395 3 5.5V19.5C3 20.605 3.895 21.5 5 21.5H19C20.105 21.5 21 20.605 21 19.5V6.914L11 16.914Z"
                  fill="#F5F5F5"
                />
              </svg>
              <p className="w-1/2">
                <span className="text-center">10</span>
              </p>
            </p>
            <p className="bg-badge_green text-white justify-between flex flex-row border font-bold text-xl border-black p-4">
              <svg
                className="text-left pl-0.5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 16.914L6.293 12.207L7.707 10.793L11 14.086L20.675 4.411C20.318 3.864 19.702 3.5 19 3.5H5C3.895 3.5 3 4.395 3 5.5V19.5C3 20.605 3.895 21.5 5 21.5H19C20.105 21.5 21 20.605 21 19.5V6.914L11 16.914Z"
                  fill="#F5F5F5"
                />
              </svg>
              <p className="w-1/2">
                <span className="text-center">8</span>
              </p>
            </p>
            <p className="bg-warning text-white justify-between flex flex-row border font-bold text-xl border-black p-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12C2 6.47 6.47 2 12 2ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
                  fill="white"
                />
              </svg>
              <p className="w-1/2">
                <span className="text-center">4</span>
              </p>
            </p>
            <p className="bg-badge_green text-white justify-between flex flex-row border font-bold text-xl border-black p-4">
              <svg
                className="text-left pl-0.5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 16.914L6.293 12.207L7.707 10.793L11 14.086L20.675 4.411C20.318 3.864 19.702 3.5 19 3.5H5C3.895 3.5 3 4.395 3 5.5V19.5C3 20.605 3.895 21.5 5 21.5H19C20.105 21.5 21 20.605 21 19.5V6.914L11 16.914Z"
                  fill="#F5F5F5"
                />
              </svg>
              <p className="w-1/2">
                <span className="text-center">9</span>
              </p>
            </p>
            <p className="bg-lightGray text-white text-left flex flex-row border font-bold text-xl border-black p-4">
              <svg
                className="pl-0.5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11ZM20 12V18H22V12H20ZM20 20V22H22V20H20ZM18 20C16.3 21.3 14.3 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z"
                  fill="white"
                />
              </svg>
              <p className="pl-4">
                <span className="text-center">Próxima</span>
              </p>
            </p>
            <p className="bg-lightGray text-white text-left flex flex-row border font-bold text-xl border-black p-4">
              <svg
                className="pl-0.5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11ZM20 12V18H22V12H20ZM20 20V22H22V20H20ZM18 20C16.3 21.3 14.3 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z"
                  fill="white"
                />
              </svg>
              <p className="pl-4">
                <span className="text-center">Próxima</span>
              </p>
            </p>
          </div>
          <div className="w-full items-center gap-3">
            <p className="bg-badge_blue bg-opacity-70 text-white text-left flex flex-row border font-bold text-xl border-black p-4 sm:text-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12.94L11.06 6.88L13.12 8.94L7.06 15H5V12.94ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM14.7 7.35L13.7 8.35L11.65 6.3L12.65 5.3C12.86 5.08 13.21 5.08 13.42 5.3L14.7 6.58C14.92 6.79 14.92 7.14 14.7 7.35ZM10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0Z"
                  fill="white"
                />
              </svg>
              <p className="pl-4">
                <span className="text-center">Ver correcciones</span>
              </p>
            </p>
            <p className="bg-badge_blue bg-opacity-70 text-white text-left flex flex-row border font-bold text-xl border-black p-4 sm:text-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12.94L11.06 6.88L13.12 8.94L7.06 15H5V12.94ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM14.7 7.35L13.7 8.35L11.65 6.3L12.65 5.3C12.86 5.08 13.21 5.08 13.42 5.3L14.7 6.58C14.92 6.79 14.92 7.14 14.7 7.35ZM10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0Z"
                  fill="white"
                />
              </svg>
              <p className="pl-4">
                <span className="text-center">Ver correcciones</span>
              </p>
            </p>
            <p className="bg-primary text-white text-left flex flex-row border font-bold text-xl border-black p-4 sm:text-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12.94L11.06 6.88L13.12 8.94L7.06 15H5V12.94ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM14.7 7.35L13.7 8.35L11.65 6.3L12.65 5.3C12.86 5.08 13.21 5.08 13.42 5.3L14.7 6.58C14.92 6.79 14.92 7.14 14.7 7.35ZM10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0Z"
                  fill="white"
                />
              </svg>
              <p className="pl-4">
                <span className="text-center">Ver correcciones</span>
              </p>
            </p>
            <p className="bg-badge_blue bg-opacity-70 text-white text-left flex flex-row border font-bold text-xl border-black p-4 sm:text-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12.94L11.06 6.88L13.12 8.94L7.06 15H5V12.94ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM14.7 7.35L13.7 8.35L11.65 6.3L12.65 5.3C12.86 5.08 13.21 5.08 13.42 5.3L14.7 6.58C14.92 6.79 14.92 7.14 14.7 7.35ZM10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0Z"
                  fill="white"
                />
              </svg>
              <p className="pl-4">
                <span className="text-center">Ver correcciones</span>
              </p>
            </p>
            <p className="bg-lightGray text-white text-left flex flex-row border font-bold text-xl border-black p-4 sm:text-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12.94L11.06 6.88L13.12 8.94L7.06 15H5V12.94ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM14.7 7.35L13.7 8.35L11.65 6.3L12.65 5.3C12.86 5.08 13.21 5.08 13.42 5.3L14.7 6.58C14.92 6.79 14.92 7.14 14.7 7.35ZM10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0Z"
                  fill="white"
                />
              </svg>
              <p className="pl-4">
                <span className="text-center">Ver correcciones</span>
              </p>
            </p>
            <p className="bg-lightGray text-white text-left flex flex-row border font-bold text-xl border-black p-4 sm:text-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12.94L11.06 6.88L13.12 8.94L7.06 15H5V12.94ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM14.7 7.35L13.7 8.35L11.65 6.3L12.65 5.3C12.86 5.08 13.21 5.08 13.42 5.3L14.7 6.58C14.92 6.79 14.92 7.14 14.7 7.35ZM10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0Z"
                  fill="white"
                />
              </svg>
              <p className="pl-4">
                <span className="text-center">Ver correcciones</span>
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default QualificationStudents;
