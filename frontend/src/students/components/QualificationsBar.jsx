import { ResponsiveBar } from "@nivo/bar";
import { mockBarData as data } from "../data/dashboardStudents";

const QualificationsBar = () => {
  return (
    <ResponsiveBar
      data={data}
      keys={["calificación"]}
      indexBy="materia"
      colors={(data) => data.data.calificaciónColor}
      margin={{ top: 20, right: 10, bottom: 40, left: 50 }}
      padding={0.5}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -47,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
        tickValues: [0, 25, 50, 75, 100],
      }}
      enableLabel={false}
      isInteractive={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " Nota: " + e.indexValue;
      }}
    />
  );
};

export default QualificationsBar;
