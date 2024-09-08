import Footer from "../../common/components/layout/Footer";
import NavbarHome from "../../common/components/layout/NavbarHome";
import ForStudents from "../../public/components/ForStudents";
import OurTeacher from "../../public/components/OurTeacher";
import StatsHighLight from "../../public/components/StatsHighLight";
import TestimonialsCarrousel from "../../public/components/TestimonialsCarrousel";
import Events from "../../public/components/Events";
import BannerHome from "../../public/components/BannerHome";
import ForTeachers from "../../public/components/ForTeachers";
import Quotation from "../../public/components/Quotation";
import WhyUs from "../../public/components/WhyUs";
import { whyUsBg, whyUsBgWeb } from "./../../common/assets";
import ContactUs from "../../public/components/ContactUs";
import AboutUs from "../../public/components/AboutUs";
import BackToTopButton from "../../common/utils/BackToTopButton";

const Home = () => {
  return (
    <>
      <NavbarHome />
      <section id="inicio">
        <BannerHome />
      </section>
      <section className="w-full">
        <ForTeachers />
      </section>
      <section className="w-full pt-20" id="nosotros">
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
      <section className="w-full pt-20 md:py-20 bg-white" id="ventajas">
        <StatsHighLight />
      </section>
      <section className="w-full bg-white">
        <TestimonialsCarrousel />
      </section>
      <section className="w-full pt-20 md:py-7" id="eventos">
        <Events />
      </section>
      <section className="pt-20 pb-7 md:py-24" id="contacto">
        <ContactUs />
      </section>
      <BackToTopButton />
      <Footer />
    </>
  );
};

export default Home;
