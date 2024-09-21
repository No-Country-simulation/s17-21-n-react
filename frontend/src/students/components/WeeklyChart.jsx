import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/dashboardStudents";

const WeeklyChart = () => {
  return (
    <>
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 10, bottom: 40, left: 20 }}
        xScale={{ type: "linear" }}
        yScale={{ type: "linear", min: 0, max: 100 }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 1,
          tickPadding: 1,
          tickRotation: 0,
          tickValues: [0, 25, 50, 75, 100],
        }}
        dotSize={8}
        enableGridX={false}
        enableTooltip={false}
        isInteractive={false}
        enableSlices={false}
        colors={{ scheme: "spectral" }}
        lineWidth={3}
        pointSize={8}
        pointColor={{ from: "color", modifiers: [] }}
        pointBorderWidth={4}
        pointBorderColor={{ from: "serieColor", modifiers: [] }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        areaOpacity={0}
        enableTouchCrosshair={true}
        useMesh={true}
        legend={{
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, 0.5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, 0.03)",
                itemOpacity: 1,
              },
            },
          ],
        }}
      />
      <div className="flex gap-x-9 md:gap-x-28 lg:gap-x-16 xl:gap-x-28 items-stretch justify-center mb-2">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
    </>
  );
};

export default WeeklyChart;
