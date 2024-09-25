import { useEffect, useState } from "react";
import { CirclePlus, RefreshCcw } from "lucide-react";
import Pagination from "../../common/components/Pagination";
import CardCourse from "../../common/components/CardCourse";
import AddCourseModal from "../components/AddCourseModal";
import Spinner from "../../common/utils/Spinner";
import useCoursesStore from "../../store/courses";

export default function CoursesByAdmin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { courses, loading, error, fetchCourses } = useCoursesStore();

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleAddCourseClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    fetchCourses();
  };

  return (
    <div className="relative w-full mx-auto bg-white">
      <h1 className="text-[#495057] text-2xl mb-6 font-bold">Gestión de Cursos</h1>

      <div className="flex justify-end py-5 space-x-4">
        <button onClick={fetchCourses}>
          <RefreshCcw />
        </button>
        <button
          className="flex justify-center bg-primary p-4 w-56 h-10 text-white rounded-md items-center"
          onClick={handleAddCourseClick}
        >
          <CirclePlus />
          <p className="p-4">Añadir Curso</p>
        </button>
      </div>

      {loading ? (
        <Spinner />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => {
            const teacher =
              course.subjectTeachers?.[0]?.teacher?.name +
                " " +
                course.subjectTeachers?.[0]?.teacher?.lastName || "Docente no disponible";

            return (
              <li key={course.id}>
                <CardCourse
                  courseId={course.id || 1}
                  name={course.name || "Curso sin nombre"}
                  code={course.code || "12345"}
                  description={course.description || "Descripción no disponible"}
                  image={course.image || "/course_cover.webp"}
                  category={course.category?.name || "Sin categoría"}
                  rating={course.rating || 4.5}
                  reviews={course.reviews || 12}
                  lessons={course._count.classes || 0}
                  teacher={teacher}
                />
              </li>
            );
          })}
        </ul>
      )}

      <section className="mt-6 flex justify-end">
        <Pagination />
      </section>

      <AddCourseModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}
