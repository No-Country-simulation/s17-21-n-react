import WeeklyChart from "./WeeklyChart";

const WeeklyLineChart = () => {
  return (
    <div className="w-full p-4 bg-[#f4f5f9] shadow-lg rounded-lg">
      <h2 className="text-gray-500 font-semibold pb-5">Progreso semanal</h2>

      <div className="w-full aspect-[9/6]">
        <WeeklyChart />
      </div>
      <div className="flex justify-between px-2 md:px-4 mt-4 pt-5">
        <div className="flex flex-row gap-2 items-center justify-center text-center">
          <p className="text-sm md:text-lg font-bold text-gray-700">6</p>
          <p className="text-gray-700">Entregas a tiempo</p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center text-center text-[#ff4d4f]">
          <p className="text-sm md:text-lg font-bold">2</p>
          <p>Entregas tardías</p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyLineChart;
