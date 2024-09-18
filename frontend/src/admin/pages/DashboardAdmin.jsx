import ActivityOverview from "../../teachers/components/ActivityOverview";
import DashboardSummary from "../../teachers/components/DashboardSummary";
import AttendanceCardSVG from "../../teachers/components/AttendanceCardSVG";
import EvaluationStatisticsSVG from "../../teachers/components/EvaluationStatisticsSVG";
import LineChartSVG from "../../teachers/components/LineChartSVG";
import { evaluationStatistics, exampleTaskData } from "../../teachers/data/dashboardTeachers";

const DashboardAdmin = () => {
  return (
    <div className="container bg-white">
    <DashboardSummary />
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

export default DashboardAdmin;
