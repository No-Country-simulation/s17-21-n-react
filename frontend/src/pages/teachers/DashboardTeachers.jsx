import ActivityOverview from "../../components/ActivityOverview";
import AttendanceCardSVG from "../../components/AttendanceCardSVG";
import EvaluationStatisticsSVG from "../../components/EvaluationStatisticsSVG";
import LineChartSVG from "../../components/LineChartSVG";
import { evaluationStatistics, exampleTaskData } from "../../data/dashboardTeachers";

const DashboardTeachers = () => {
  return (
    <div className="container bg-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Teacher Dashboard</h1>
      </header>

      <section className="bg-white my-7 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AttendanceCardSVG />
        <EvaluationStatisticsSVG data={evaluationStatistics} />
        <LineChartSVG data={exampleTaskData} />
      </section>

      <section>
        <ActivityOverview />
      </section>

      <footer className="text-center mt-8 border-t-2 pt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} EducaPro, Todos los derechos reservados. Equipo:
          s17-n-react-node
        </p>
      </footer>
    </div>
  );
};

export default DashboardTeachers;
