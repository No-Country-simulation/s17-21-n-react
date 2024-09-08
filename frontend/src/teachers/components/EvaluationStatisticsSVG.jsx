/* eslint-disable react/prop-types */

export default function EvaluationStatisticsSVG({ data }) {
  const maxEvaluations = Math.max(...data.map((item) => item.value));
  const totalEvaluations = data.reduce((acc, item) => acc + item.value, 0);
  const averageScore = (data.reduce((acc, item) => acc + item.average, 0) / data.length).toFixed(1);

  // Calculate steps for the vertical axis labels
  const step = 50;
  const numberOfSteps = Math.ceil(maxEvaluations / step);
  const labels = Array.from({ length: numberOfSteps + 1 }, (_, i) => i * step);

  return (
    <div className="w-full bg-[#f4f5f9] shadow-lg rounded-lg py-6 px-4">
      <h2 className="text-gray-500 font-semibold">Estadísticas de Evaluaciones</h2>
      <div className="flex justify-center items-center mt-8 w-full h-[280px]">
        {" "}
        {/* Adjust height */}
        <svg viewBox="0 0 400 200" className="w-full h-full">
          {" "}
          {/* Adjust width and height */}
          {/* Vertical Axis Labels */}
          {labels.map((label) => (
            <text
              key={label}
              x={18}
              y={200 - (label / maxEvaluations) * 160} // Adjust positioning for vertical centering
              fill="#333"
              fontSize="12"
              textAnchor="end"
            >
              {label}
            </text>
          ))}
          {/* Horizontal Axis Labels */}
          {data.map((item, index) => {
            const barHeight = (item.value / maxEvaluations) * 160; // Scale to SVG
            const barWidth = 6; // Fixed width for bars
            const xPosition = index * (barWidth + 25) + 30; // Adjust spacing between bars

            return (
              <g key={item.month}>
                {/* Bar */}
                <rect
                  x={xPosition}
                  y={200 - barHeight} // Adjust positioning for vertical centering
                  width={barWidth}
                  height={barHeight}
                  fill="#10B981"
                />
                {/* Value Label */}
                <text
                  x={xPosition + barWidth / 2}
                  y={200 - barHeight - 5} // Adjust positioning for vertical centering
                  fill="#333"
                  fontSize="12"
                  textAnchor="middle"
                >
                  {item.value}
                </text>
                {/* Month Label */}
                <text
                  x={xPosition + barWidth / 2}
                  y={215} // Position below the bar
                  fill="#333"
                  fontSize="12"
                  textAnchor="middle"
                  transform={`rotate(-45 ${xPosition + barWidth / 2} 215)`}
                >
                  {item.month.substring(0, 3)} {/* Abbreviate month */}
                </text>
              </g>
            );
          })}
          {/* Vertical Axis Lines */}
          <line x1={20} y1={0} x2={20} y2={200} stroke="#e0e0e0" strokeWidth="1" />
          {/* Horizontal Axis Lines */}
          <line x1={20} y1={200} x2={400} y2={200} stroke="#e0e0e0" strokeWidth="1" />
        </svg>
      </div>
      <div className="flex justify-center items-center mt-4 gap-4 text-gray-700">
        <div className="text-center">
          <p className="text-xl font-bold">{averageScore}</p>
          <p className="text-gray-700">Promedio de Notas</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">{totalEvaluations}</p>
          <p className="text-gray-700">Total de Evaluaciones</p>
        </div>
      </div>
    </div>
  );
}
