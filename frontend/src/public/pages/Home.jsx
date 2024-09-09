import Footer from "../../common/components/layout/Footer";
import NavbarHome from "../../common/components/layout/NavbarHome";
import { whyUsBg, whyUsBgWeb } from "./../../common/assets";
import BackToTopButton from "../../common/utils/BackToTopButton";
import {
  AboutUs,
  ContactUs,
  Events,
  BannerHome,
  ForTeachers,
  ForStudents,
  WhyUs,
  OurTeacher,
  Quotation,
  StatsHighLight,
  TestimonialsCarrousel,
} from "@public";

export function Home() {
  return (
    <>
      <NavbarHome />
      <section id="home">
        <BannerHome />
      </section>
      <section className="w-full">
        <ForTeachers />
      </section>
      <section className="w-full" id="about">
        <AboutUs />
      </section>
      <section className="w-full py-9 md:py-16">
        <ForStudents />
      </section>
      <section className="w-full relative h-[1000px] lg:h-[600px] xl:h-[820px] flex lg:items-center justify-center xl:justify-normal overflow-hidden">
        <WhyUs />
        <img
          src={whyUsBgWeb}
          alt="Background"
          className="hidden lg:block absolute top-0 -right-20 xl:right-0 lg:h-[590px] xl:h-[820px]"
        />
        <img src={whyUsBg} alt="Background m" className="md:hidden w-full absolute bottom-0" />
      </section>
      <section className="w-full py-7 md:py-14">
        <OurTeacher />
      </section>
      <section className="w-full">
        <Quotation />
      </section>
      <section className="w-full py-7 md:py-14 bg-inherit" id="advantages">
        <StatsHighLight />
      </section>
      <section className="w-full bg-inherit">
        <TestimonialsCarrousel />
      </section>
      <section className="w-full md:py-7" id="events">
        <Events />
      </section>
      <section className="py-7 md:py-14" id="contact">
        <ContactUs />
      </section>
      <BackToTopButton />
      <Footer />
    </>
  );
}
