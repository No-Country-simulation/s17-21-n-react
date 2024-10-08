import { User, GraduationCap, MessageSquare, CheckSquare } from "lucide-react";

const summary = [
  {
    id: 1,
    title: "ESTUDIANTES INSCRITOS",
    icon: <User className="text-gray-600" size={24} />,
    value: "1,200",
    percentage: "+11%",
    description: "Respecto al período anterior",
  },
  {
    id: 2,
    title: "PROMEDIO DE CALIFICACIONES",
    icon: <GraduationCap className="text-gray-600" size={24} />,
    value: "17.5",
    percentage: "-29%",
    description: "Respecto al período anterior",
  },
  {
    id: 3,
    title: "CLASES IMPARTIDAS",
    icon: <MessageSquare className="text-gray-600" size={24} />,
    value: "1890",
    percentage: "0%",
    description: "Respecto al período anterior",
  },
  {
    id: 4,
    title: "TAREAS EVALUADAS",
    icon: <CheckSquare className="text-gray-600" size={24} />,
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
    <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full items-center justify-center">
      {summary.map((sumary) => (
        <div
          className="w-full p-4 flex flex-col h-auto gap-1 shadow-lg rounded-lg bg-[#f4f5f9]"
          key={sumary.id}
        >
          <div className="w-auto h-auto text-gray-500 font-bold text-sm">
            <div className=" flex items-center justify-between">
              <h2>{sumary.title}</h2>
              <h2>{sumary.icon}</h2>
            </div>
          </div>
          <h2 className="text-2xl text-gray-500 text-left font-bold">{sumary.value}</h2>
          <div className="flex justify-start items-center gap-4">
            <div
              className={`w-10 h-auto text-sm rounded text-center ${getBackgroundColor(sumary.percentage)} text-white`}
            >
              <p className="py-2">{sumary.percentage}</p>
            </div>
            <p className="text-black text-sm">{sumary.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardSummary;
