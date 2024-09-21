import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { events } from "../data/events";

export function Events() {
  return (
    <>
      <div className="container mx-auto max-w-7xl p-4 flex flex-col items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-row items-center gap-2">
            <div className="bg-primary size-3 rounded-full" />
            <h2 className="text-primary uppercase font-semibold md:text-xl">Nuestros eventos</h2>
          </div>
          <h1 className="font-bold text-2xl md:text-[40px] text-center capitalize">
            Descubre nuestros próximos eventos educativos
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
        className="eventSwiper container mx-auto max-w-7xl py-2.5"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="relative min-w-[290px] w-[330px] md:w-[350px] lg:w-[320px] xl:w-[370px] min-h-[480px] max-h-[570px] flex flex-col bg-white shadow-custom rounded-lg">
              <div className="">
                <img src={event.photo} alt="foto" className="object-cover rounded-t-lg" />
              </div>
              <div className="absolute top-0 left-7 bg-primary w-auto max-w-24 p-1 px-4 flex items-center justify-center rounded-b-md">
                <span className="text-sm text-white text-center font-medium capitalize">
                  {event.event}
                </span>
              </div>
              <div className="p-7 flex flex-col gap-2">
                <span className="font-normal text-base">Fecha: {event.date}</span>
                <h2 className="font-bold text-lg">{event.title}</h2>
                <p className="font-normal text-base">{event.description}</p>
                <span className="font-semibold text-base">Leer mas</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
