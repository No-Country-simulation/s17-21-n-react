/* eslint-disable react/prop-types */
import React from "react";

export default function LineChartSVG({ data }) {
  const maxValue = Math.max(...data.flatMap((d) => [d.onTime, d.late]));
  const scale = (value) => 200 - (value / maxValue) * 180;

  return (
    <div className="w-full p-4 bg-[#f4f5f9] shadow-lg rounded-lg">
      <h2 className="text-gray-500 font-semibold">Entregas de Tareas</h2>

      <div className="w-full aspect-[4/3]">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Eje Y y líneas de cuadrícula */}
          <line x1="50" y1="20" x2="50" y2="220" stroke="#e0e0e0" />
          {[0, 50, 100, 150, 200].map((value, index) => (
            <React.Fragment key={index}>
              <line
                x1="45"
                y1={220 - index * 45}
                x2="350"
                y2={220 - index * 45}
                stroke="#e0e0e0"
                strokeDasharray="5,5"
              />
              <text x="20" y={225 - index * 45} fontSize="12" textAnchor="end" fill="#666">
                {value}
              </text>
            </React.Fragment>
          ))}

          {/* Eje X */}
          <line x1="50" y1="220" x2="350" y2="220" stroke="#e0e0e0" />

          {/* Líneas de datos */}
          <polyline
            points={data.map((d, i) => `${65 + i * 70},${scale(d.onTime)}`).join(" ")}
            fill="none"
            stroke="#666"
            strokeWidth="2"
          />
          <polyline
            points={data.map((d, i) => `${65 + i * 70},${scale(d.late)}`).join(" ")}
            fill="none"
            stroke="#ff4d4f"
            strokeWidth="2"
          />

          {/* Puntos de datos */}
          {data.map((d, i) => (
            <React.Fragment key={i}>
              <circle cx={65 + i * 70} cy={scale(d.onTime)} r="4" fill="#666" />
              <circle cx={65 + i * 70} cy={scale(d.late)} r="4" fill="#ff4d4f" />
              <text x={65 + i * 70} y="240" fontSize="12" textAnchor="middle" fill="#666">
                {d.day}
              </text>
            </React.Fragment>
          ))}
        </svg>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <div className="text-center ">
          <p className="text-xl font-bold text-gray-700">{data.reduce((acc, item) => acc + item.onTime, 0)}</p>
          <p className="text-gray-700">Entregas a Tiempo</p>
        </div>
        <div className="text-center  text-[#ff4d4f]">
          <p className="text-xl  font-bold">{data.reduce((acc, item) => acc + item.late, 0)}</p>
          <p>Entregas tardías</p>
        </div>
      </div>
    </div>
  );
}
