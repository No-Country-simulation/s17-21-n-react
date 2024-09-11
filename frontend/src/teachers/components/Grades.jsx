import { useState, useEffect } from "react";
import { save, excel, pdf } from "../../common/assets";

const GradesByTeacher = () => {
  //comida para perro:
  const cursos = ["A1", "B1", "C1"];
  const clases = ["mago", "luchador", "tirador", "defensor"];
  const students = [
    { name: "Maria", lastName: "Lopez", codigo: "011", nota: "-1", email: "marialopez@edupro.com" },
    { name: "Mario", lastName: "I'am", codigo: "012", nota: "-51", email: "IamMario@edupro.com" },
    {
      name: "Marioneta",
      lastName: "Ledesma",
      codigo: "014",
      nota: "10",
      email: "MarioLede@edupro.com",
    },
    { name: "Juan", lastName: "Perez", codigo: "015", nota: "8", email: "juanperez@edupro.com" },
    { name: "Ana", lastName: "Gomez", codigo: "016", nota: "7", email: "anagomez@edupro.com" },
    {
      name: "Lucas",
      lastName: "Ramirez",
      codigo: "017",
      nota: "9",
      email: "lucasramirez@edupro.com",
    },
    {
      name: "Sofia",
      lastName: "Martinez",
      codigo: "018",
      nota: "6",
      email: "sofiamartinez@edupro.com",
    },
    {
      name: "Pedro",
      lastName: "Gonzalez",
      codigo: "019",
      nota: "5",
      email: "pedrogonzalez@edupro.com",
    },
    { name: "Laura", lastName: "Lopez", codigo: "020", nota: "4", email: "lauralopez@edupro.com" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const studentsPerPageDesktop = 8;
  const studentsPerPageMobile = 2;
  const studentsPerPage = isMobile ? studentsPerPageMobile : studentsPerPageDesktop;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(students.length / studentsPerPage);
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-4" name="Grades">
      <div className="mb-4">
        <h1 className="text-lg font-bold pb-4">Calificaciones de estudiantes</h1>
        <h2 className="text-lg font-semibold">Filtrar datos</h2>
      </div>

      <div className="flex flex-col space-y-4 mb-6">
        <div name="filterGrade">
          <label className="block font-semibold text-lg text-primary pb-2">Seleccionar curso</label>
          <select className="border border-[#0A0A0B] p-2 rounded-lg w-full text-[#595354]" required>
            <option>Seleccione un curso</option>
            {cursos.map((curso, index) => (
              <option key={index}>{curso}</option>
            ))}
          </select>
        </div>

        <div name="filterCourse">
          <label className="block font-semibold text-lg text-primary pb-2">Seleccionar clase</label>
          <select className="border border-[#0A0A0B] p-2 rounded-lg w-full text-[#595354]" required>
            <option>Seleccione una clase</option>
            {clases.map((clase, index) => (
              <option key={index}>{clase}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Asignar calificaciones</h2>
      </div>

      <div className="overflow-x-auto">
        <table
          className="table-auto w-full text-left border-separate text-xs"
          style={{ borderSpacing: isMobile ? "0" : "0 0.7em" }}
        >
          <thead className="bg-[#0B0E29] text-white font-semibold">
            <tr>
              <th className="py-2 px-4 text-center border border-[#0B0E29] ">Código</th>
              <th className="py-2 px-4 text-center border border-[#0B0E29] ">Nombre</th>
              <th className="py-2 px-4 text-center border border-[#0B0E29] ">Correo electrónico</th>
              <th className="py-2 px-4 text-center border border-[#0B0E29] ">Nota</th>
              <th className="py-2 px-4 text-center border border-[#0B0E29]">Acción</th>
            </tr>
          </thead>
          <tbody className="bg-white text-black">
            {currentStudents.map((student, index) => (
              <tr key={index}>
                <td className="py-2 px-4 text-center font-bold border border-[#9C9898] border-r-0">
                  {student.codigo}
                </td>
                <td className="py-2 px-4 text-center border border-[#9C9898] border-r-0 border-l-0">{`${student.name} ${student.lastName}`}</td>
                <td className="py-2 px-4 text-center border border-[#9C9898] border-r-0 border-l-0">
                  {student.email}
                </td>
                <td className="py-2 px-4 text-center font-bold border border-[#9C9898] border-r-0 border-l-0">
                  {student.nota}
                </td>
                <td className="py-2 px-4 text-center border border-[#9C9898] border-l-0">
                  <button className="bg-primary text-white px-4 py-1 rounded text-xs">
                    Guardar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          display: isMobile ? "block" : "flex",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
        }}
      >
        <div className={isMobile ? " flex justify-center space-x-4 p-3" : "flex p-2 space-between"}>
          <button
            className="bg-[#4E6BFF] w-[162px] h-[32px] p-[2px_4px] gap-[8px] rounded text-white shadow-lg text-[10px] flex items-center justify-center"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <img src={save} alt="" className="mr-2" />
            Guardar
          </button>
          <button
            className="bg-[#2BB148] w-[162px] h-[32px] p-[2px_4px] gap-[8px] rounded text-white shadow-lg text-[10px] flex items-center justify-center ml-4"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <img src={excel} alt="" className="mr-2" />
            Exportar a Excel
          </button>
        </div>

        <div className="mt-4 flex justify-center items-center space-x-2">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="bg-gray-300 px-3 py-1 rounded text-sm w-[30px] h-[32px]"
          >
            {"<<"}
          </button>

          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="bg-gray-300 px-3 py-1 rounded text-sm w-[30px] h-[32px]"
          >
            {"<"}
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded text-sm w-[30px] h-[32px] ${
                index + 1 === currentPage ? "bg-[#F6161F] text-white" : "bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="bg-gray-300 px-3 py-1 rounded text-sm w-[30px] h-[32px]"
          >
            {">"}
          </button>

          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="bg-gray-300 px-3 py-1 rounded text-sm w-[30px] h-[32px]"
          >
            {">>"}
          </button>
        </div>
      </div>

      <div className="h-[198px] border border-[#868181] rounded-r-lg p-2 mt-4">
        <h1 className="font-bold text-base">Detalles de la tarea</h1>

        <div className="p-1">
          <h2 className="text-sm font-semibold p-1 mt-2">Consignas</h2>
          <h2 className="text-sm font-semibold p-1">Tarea 1: Límites y continuidad</h2>
          <p className="text-sm pl-1">
            Resolver los problemas del libro de texto capítulo Límites y continuidad.
          </p>
          <p className="text-sm pl-1">Fecha de entrega: 05/09/2024</p>
        </div>

        <buton className="flex items-center h-[26px] px-4 py-6">
          <img className="m-1" src={pdf} />
          Descargar PDF
        </buton>
      </div>
    </div>
  );
};

export default GradesByTeacher;
