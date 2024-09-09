/* eslint-disable react/prop-types */
import { quote, triangle } from "../../common/assets";

export function Testimonials({ testimonial }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center w-[300px] lg:w-[935px] z-[1]">
        <div className="relative w-[250px] lg:w-[398px] h-auto max-h-[530px] border-4 border-primary bg-primary rounded-tl-lg rounded-br-lg">
          <img
            src={testimonial.photo}
            alt={testimonial.fullName}
            className="object-cover w-full max-h-[520px] rounded-sm bg-primary rounded-tl-md rounded-br-md"
          />
          <img
            src={triangle}
            alt="Testimonial"
            className="absolute top-[-3px] right-[-31px] lg:right-[-38px] w-7 lg:w-[35px]"
          />
          <img
            src={triangle}
            alt="Testimonial"
            className="absolute bottom-[-3px] left-[-31px] lg:left-[-38px] rotate-180 w-7 lg:w-[35px]"
          />
        </div>
        <div className="w-[300px] md:w-[600px] lg:w-[670px] lg:h-[380px] p-5 lg:p-10 bg-background_primary rounded-xl md:rounded-r-xl lg:rounded-l-none relative">
          <div className="flex flex-col gap-5 lg:gap-[30px]">
            <img src={quote} alt="quote" className="lg:w-16" width={44} height={44} />
            <p
              id="testimonial-quote"
              className="text-pretty text-[#7D7F85] text-sm md:text-xl lg:text-2xl"
            >
              {testimonial.testimonial}
            </p>
            <div id="testimonial-person" className="flex flex-col">
              <h3 className="font-bold text-sm lg:text-lg">{testimonial.fullName}</h3>
              <span className="text-[#7D7F85] text-xs lg:text-base font-normal">
                {testimonial.specialty}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
