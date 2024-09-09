import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { teacher1, teacher2, teacher3, teacher4 } from "../../common/assets";

export function OurTeacher() {
  const teachers = [
    {
      id: 1,
      photo: teacher1,
      alt: "Profesores",
    },
    {
      id: 2,
      photo: teacher2,
      alt: "Profesores",
    },
    {
      id: 3,
      photo: teacher3,
      alt: "Profesores",
    },
    {
      id: 4,
      photo: teacher4,
      alt: "Profesores",
    },
  ];
  return (
    <>
      <div className="container mx-auto max-w-7xl lg:px-10 p-2.5 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-row items-center gap-2">
            <div className="bg-primary size-3 rounded-full" />
            <h2 className="text-primary uppercase font-semibold md:text-2xl">nuestros docentes</h2>
          </div>
          <h1 className="font-bold text-2xl md:text-[40px] text-center capitalize">
            Empoderando a Nuestros Docentes para un Impacto Duradero
          </h1>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="teacherSwiper container mx-auto max-w-7xl py-2.5"
      >
        {teachers.map((teacher) => (
          <SwiperSlide key={teacher.id}>
            <div className="rounded-lg w-auto h-[400px] md:h-[320px] lg:h-[570px]">
              <img
                src={teacher.photo}
                alt={teacher.alt}
                className="object-cover w-auto h-[400px] md:h-[320px] lg:h-[570px] rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
