import { useState, useEffect } from "react";
import { excel } from "../../common/assets";

const StudentsByTeacher = () => {
  const cursos = ["A1", "B1", "C1"];
  const students = [
    {
      name: "Maria",
      lastName: "Lopez",
      codigo: "011",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
      email: "marialopez@edupro.com",
      grade: "A1",
      date: "2023-01-15",
    },
    {
      name: "Mario",
      lastName: "I'am",
      codigo: "012",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
      email: "IamMario@edupro.com",
      grade: "B1",
      date: "2023-02-10",
    },
    {
      name: "Juan",
      lastName: "Ledes",
      codigo: "014",
      photo: "https://randomuser.me/api/portraits/women/3.jpg",
      email: "MarioLede@edupro.com",
      grade: "C1",
      date: "2023-03-20",
    },
    {
      name: "Juan",
      lastName: "Perez",
      codigo: "015",
      photo: "https://randomuser.me/api/portraits/men/4.jpg",
      email: "juanperez@edupro.com",
      grade: "A1",
      date: "2023-04-15",
    },
    {
      name: "Ana",
      lastName: "Gomez",
      codigo: "016",
      photo: "https://randomuser.me/api/portraits/women/5.jpg",
      email: "anagomez@edupro.com",
      grade: "B1",
      date: "2023-05-11",
    },
    {
      name: "Lucas",
      lastName: "Ramirez",
      codigo: "017",
      photo: "https://randomuser.me/api/portraits/men/6.jpg",
      email: "lucasramirez@edupro.com",
      grade: "C1",
      date: "2023-06-18",
    },
    {
      name: "Sofia",
      lastName: "Martinez",
      codigo: "018",
      photo: "https://randomuser.me/api/portraits/women/7.jpg",
      email: "sofiamartinez@edupro.com",
      grade: "A1",
      date: "2023-07-09",
    },
    {
      name: "Pedro",
      lastName: "Gonzalez",
      codigo: "019",
      photo: "https://randomuser.me/api/portraits/men/8.jpg",
      email: "pedrogonzalez@edupro.com",
      grade: "B1",
      date: "2023-08-12",
    },
    {
      name: "Laura",
      lastName: "Lopez",
      codigo: "020",
      photo: "https://randomuser.me/api/portraits/women/9.jpg",
      email: "lauralopez@edupro.com",
      grade: "C1",
      date: "2023-09-05",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const studentsPerPageDesktop = 5;
  const studentsPerPageMobile = 4;
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

  const borderStyle = isMobile
    ? {}
    : { border: "1px solid #9C9898", borderLeft: 0, borderRight: 0 };

  return (
    <div name="Students" className="container mx-auto p-4">
      <div name="Tittle" className="mb-4">
        <h1 className="text-lg font-bold pb-4">Mis alumnos</h1>
        <h2 className="text-lg font-semibold"> Filtrar datos</h2>
      </div>

      <div name="Filter" className="flex flex-col space-y-4 mb-6">
        <label className="block font-semibold text-lg text-primary pb-2">Seleccionar curso</label>
        <select className="border border-[#0A0A0B] p-2 rounded-lg w-full text-[#595354]">
          <option>Seleccione un curso</option>
          {cursos.map((curso, index) => (
            <option key={index}>{curso}</option>
          ))}
        </select>
      </div>

      <div name="TableStudents">
        <table className="table-auto min-w-[600px] w-full text-left text-sm">
          <thead className="bg-[#0B0E29] text-white font-semibold">
            <tr>
              <th className="py-2 px-4 text-center">Código</th>
              {!isMobile && <th className="py-2 px-4 text-center">Foto</th>}
              <th className="py-2 px-4 text-center min-w-[150px]">Nombre y apellido</th>
              <th className="py-2 px-4 text-center">Correo electrónico</th>
              <th className="py-2 px-4 text-center">Curso</th>
              <th className="py-2 px-4 text-center min-w-[146px]">Fecha de Inicio</th>
            </tr>
          </thead>
          <tbody className="bg-white text-black">
            {currentStudents.map((student, index) => (
              <tr key={index}>
                <td className="py-2 px-4 text-center" style={borderStyle}>
                  {student.codigo}
                </td>
                {!isMobile && (
                  <td className="py-2 px-4 text-center border border-[#9C9898] border-r-0 border-l-0">
                    <img
                      src={student.photo}
                      className="h-[30px] w-[30px] rounded-full inline-block"
                      alt=""
                    />
                  </td>
                )}
                <td className="py-2 px-4 text-center min-w-[150px]" style={borderStyle}>
                  {`${student.name} ${student.lastName}`}
                </td>
                <td className="py-2 px-4 text-center" style={borderStyle}>
                  {student.email}
                </td>
                <td className="py-2 px-4 text-center" style={borderStyle}>
                  {student.grade}
                </td>
                <td className="py-2 px-4 text-center min-w-[146px]" style={borderStyle}>
                  {student.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        name="buttons"
        style={{
          display: isMobile ? "block" : "flex",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
        }}
      >
        <div className={isMobile ? "flex justify-center space-x-4 p-3" : "flex p-2 space-between"}>
          <button
            className="bg-[#2BB148] w-[162px] h-[32px] p-[2px_4px] rounded text-white shadow-lg text-[10px] flex items-center justify-center ml-4"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <img src={excel} alt="" />
            Exportar a Excel
          </button>
        </div>

        <div className="mt-2 flex justify-center items-center space-x-2">
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
              className={`px-3 py-1 rounded text-sm w-[30px] h-[32px] ${index + 1 === currentPage ? "bg-[#F6161F] text-white" : "bg-gray-300"}`}
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
    </div>
  );
};

export default StudentsByTeacher;
