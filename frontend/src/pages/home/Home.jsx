import Footer from "../../components/layout/Footer";
import NavbarHome from "../../components/layout/NavbarHome";
import ForStudents from "../../components/ForStudents";
import OurTeacher from "../../components/OurTeacher";
import StatsHighLight from "../../components/StatsHighLight";
import TestimonialsCarrousel from "../../components/TestimonialsCarrousel";
import Events from "../../components/Events";
import BannerHome from "../../components/BannerHome";
import ForTeachers from "../../components/ForTeachers";
import Quotation from "../../components/Quotation";
import WhyUs from "../../components/WhyUs";
import { whyUsBg, whyUsBgWeb } from "../../assets";
import ContactUs from "../../components/ContactUs";
import AboutUs from "../../components/AboutUs";
import BackToTopButton from "../../utils/BackToTopButton";

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
      <section className="w-full md:py-28" id="nosotros">
        <AboutUs />
      </section>
      <section className="w-full py-[50px] md:py-[110px]">
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
      <section className="w-full py-7 md:py-28 bg-white" id="ventajas">
        <StatsHighLight />
      </section>
      <section className="w-full py-[31px] md:pb-[133px] bg-white">
        <TestimonialsCarrousel />
      </section>
      <section className="w-full py-7 md:py-28" id="eventos">
        <Events />
      </section>
      <section id="contacto">
        <ContactUs />
      </section>
      <BackToTopButton />
      <Footer />
    </>
  );
};

export default Home;
