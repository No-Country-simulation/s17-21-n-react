import { Link } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import NavbarHome from "../../components/layout/NavbarHome";
import ForStudents from "../../components/ForStudents";
import OurTeacher from "../../components/OurTeacher";
import StatsHighLight from "../../components/StatsHighLight";
import TestimonialsCarrousel from "../../components/TestimonialsCarrousel";
import Events from "../../components/Events";
import ForTeachers from "../../components/forTeachers";
import Quotation from "../../components/quotation";
import WhyUs from "../../components/WhyUs";
import { whyUsBg, whyUsBgWeb } from "../../assets";

const Home = () => {
  return (
    <>
      <NavbarHome />
      <div className="container mx-auto p-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Welcome to Our Application!</h1>
          <p className="text-lg mt-2">Select your role to proceed.</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Students</h2>
            <p className="text-lg mb-4">Access your academic progress, assignments, and more.</p>
            <Link to="/student/dashboard" className="inline-block text-blue-500 hover:underline">
              Go to Student Dashboard
            </Link>
          </div>

          <div className="bg-green-100 p-4 rounded shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Teachers</h2>
            <p className="text-lg mb-4">
              Manage courses, track students, and access teaching resources.
            </p>
            <Link to="/teacher/dashboard" className="inline-block text-green-500 hover:underline">
              Go to Teacher Dashboard
            </Link>
          </div>

          <div className="bg-yellow-100 p-4 rounded shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Admin</h2>
            <p className="text-lg mb-4">Manage application settings, users, and view reports.</p>
            <Link to="/admin/dashboard" className="inline-block text-yellow-500 hover:underline">
              Go to Admin Dashboard
            </Link>
          </div>
        </section>
      </div>
      <section className="w-full">
        <ForTeachers />
      </section>
      <section className="w-full py-[50px] md:py-[110px]">
        <ForStudents />
      </section>
      <section className="w-full relative h-[1000px] lg:h-[600px] xl:h-[820px] flex lg:items-center justify-center xl:justify-normal overflow-hidden">
        <WhyUs />
        <img src={whyUsBgWeb} alt="Background" className="hidden lg:block absolute top-0 -right-20 xl:right-0 lg:h-[590px] xl:h-[820px]" />
        <img src={whyUsBg} alt="Background m" className="md:hidden w-full absolute bottom-0" />
      </section>
      <section className="w-full py-7 md:py-14">
        <OurTeacher />
      </section>
      <section className="w-full">
        <Quotation />
      </section>
      <section className="w-full py-7 md:pt-14 bg-white">
        <StatsHighLight />
      </section>
      <section className="w-full py-[31px] md:pb-[133px] bg-white">
        <TestimonialsCarrousel />
      </section>
      <section className="w-full py-7 md:py-14">
        <Events />
      </section>
      <Footer />
    </>
  );
};

export default Home;
