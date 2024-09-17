import DashboardSummary from "../components/DashboardSummary";
import QualificationsProgress from "../components/QualificationsProgress";
import StudyTime from "../components/StudyTime";
import WeeklyLineChart from "../components/WeeklyLineChart";

const DashboardStudents = () => {
  return (
    <div className="container bg-white">
      <DashboardSummary />
      <section className="bg-white my-7 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeeklyLineChart />
        <QualificationsProgress />
      </section>
      <StudyTime />
      <footer className="text-center mt-8 border-t-2 pt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} EducaPro, Todos los derechos reservados. Equipo:
          s17-n-react-node
        </p>
      </footer>
    </div>
  );
};

export default DashboardStudents;
