import { CirclePlus } from "lucide-react";
import CardCourse from "../components/CardCourse";
import { courses } from "../data/coursesData";
import Pagination from "../../common/components/Pagination";

export default function CoursesByTeacher() {
  return (
    <div className="relative w-full mx-auto bg-white">
      <h1 className="text-[#495057] text-2xl mb-6 font-bold">Mis Cursos</h1>

      <div className="flex justify-end py-5">
        <button className="flex justify-center bg-primary p-4 w-56 h-10 text-white rounded-md items-center">
          <CirclePlus />
          <p className="p-4">Añadir Curso</p>
        </button>
      </div>

      <ul className="grid space-y-6">
        {courses.map((course) => (
          <li key={course.id}>
            <CardCourse
              courseId={course.id || 1}
              name={course.name || "Matemáticas 1° Grado"}
              code={course.code || "12345"}
              description={course.description || "Descripción no disponible"}
              startDate={course.startDate || "Fecha no disponible"}
              duration={course.duration || "Duración no disponible"}
              image={course.image || "/course.jpg"}
              category={course.category || "Matemáticas"}
              rating={course.rating || 4.5}
              reviews={course.reviews || 44}
              lessons={course.lessons || 8}
              instructor={course.instructor || "Sarah Smith"}
            />
          </li>
        ))}
      </ul>
      {/* Controles de Paginación */}
      <section className="mt-6 flex justify-end">
        <Pagination />
      </section>
    </div>
  );
}
