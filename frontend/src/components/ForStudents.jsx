import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { spanGray, spanBlue } from "../assets";
import { forStudents } from "../data/forStudents";

const ForStudents = () => {
  return (
    <>
    <div className="container mx-auto max-w-7xl lg:px-10 p-2.5 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-row items-center gap-2">
          <div className="bg-primary size-3 rounded-full" />
          <h2 className="text-primary uppercase font-semibold">Para Estudiantes</h2>
        </div>
        <h1 className="text-[#1F2126] font-bold text-2xl md:text-4xl text-center capitalize">Todo lo que Necesitas para Triunfar</h1>
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
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="studentSwiper container mx-auto max-w-7xl py-2.5"
      >
        {forStudents.map((student) => (
          <SwiperSlide key={student.id}>
            <div className="relative min-w-[290px] w-[330px] md:w-[350px] lg:w-[320px] xl:w-[370px] max-h-[490px] flex flex-col bg-white shadow-custom rounded-lg">
              <div className="">
                <img src={student.photo} alt="foto" className="object-cover max-" />
              </div>
              <div className="icon absolute top-[45%] right-3 md:right-2 bg-[#242424] size-14 sm:size-[90px] rounded-full flex items-center justify-center border-[5px] border-primary">
                <img src={student.icon} alt="icon" />
              </div>
              <div className="p-7 flex flex-col gap-4">
                <h3 className="text-[#1F2126] font-bold text-lg">{student.title}</h3>
                <ul className="text-[#7D7F85] font-normal text-base">
                  {student.options.map((option) => (
                    <li key={option}>{option}</li>
                  ))}
                </ul>
                <span className="text-[#1F2126] font-semibold text-base">Leer mas</span>

                <img src={spanGray} alt="book" className="absolute bottom-0 right-0" />
                <img src={spanBlue} alt="book" className="absolute bottom-0 right-0" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ForStudents;
