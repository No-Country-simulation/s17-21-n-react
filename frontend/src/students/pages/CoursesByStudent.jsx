import { useEffect } from "react";
import Pagination from "../../common/components/Pagination";
import CardCourse from "../../common/components/CardCourse";
import Spinner from "../../common/utils/Spinner";
import useCoursesStore from "../../store/courses";

export default function CoursesByStudent() {
  const { courses, loading, error, fetchCourses } = useCoursesStore();

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="relative w-full mx-auto bg-white">
      <h1 className="text-[#495057] text-2xl mb-6 font-bold">Mis Cursos</h1>

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
    </div>
  );
}
