import { User, GraduationCap, MessageSquare, CheckSquare } from "lucide-react";

const summary = [
  {
    id: 1,
    title: "ESTUDIANTES INSCRIPTOS",
    icon: <User className="text-gray-600" size={32} />,
    value: "1,200",
    percentage: "+11%",
    description: "Respecto al período anterior",
  },
  {
    id: 2,
    title: "PROMEDIO DE CALIFICACIONES",
    icon: <GraduationCap className="text-gray-600" size={32} />,
    value: "17.5",
    percentage: "29%",
    description: "Respecto al período anterior",
  },
  {
    id: 3,
    title: "CLASES IMPARTIDAS",
    icon: <MessageSquare className="text-gray-600" size={32} />,
    value: "1890",
    percentage: "0%",
    description: "Respecto al período anterior",
  },
  {
    id: 4,
    title: "TAREAS EVALUADAS",
    icon: <CheckSquare className="text-gray-600" size={32} />,
    value: "520",
    percentage: "+89%",
    description: "Respecto al período anterior",
  },
];

const getBackgroundColor = (percentage) => {
  const value = parseFloat(percentage);
  if (value > 0) return "bg-green-500";
  if (value < 0) return "bg-red-500";
  return "bg-yellow-500";
};
const DashboardSummary = () => {
  return (
    <div className="w-full flex flex-row h-auto m-10">
      {summary.map((sumary, id) => (
        <div className="flex-col w-96 bg-slate-400 rounded-lg mx-auto " key={sumary.id}>
          <div className="text-center text-black font-bold text-xl my-6">
            <div className="flex items-center justify-around">
              <h2>{sumary.title}</h2>
              <h2 className="text-lg">{sumary.icon}</h2>
            </div>
            <h2 className="w-10 text-xl mx-auto text-center">{sumary.value}</h2>
          </div>
          <div className="flex justify-around mb-6">
            <div
              className={`w-10 text-sm mx-4 rounded text-center ${getBackgroundColor(sumary.percentage)} text-white`}
            >
              <p>{sumary.percentage}</p>
            </div>
            <p className="text-black text-lg">{sumary.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardSummary;
