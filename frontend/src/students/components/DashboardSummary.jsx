import { Award, BookCheck, CheckSquare, ClockArrowUp,  } from "lucide-react";

const studentSummary = [
    {
      id: 1,
      title: "Horas de estudio",
      icon: <ClockArrowUp className="text-gray-600" size={24} />,
      value: "24 H",
      percentage: "+11%",
      description: "Respecto a la semana pasada",
    },
    {
      id: 2, 
      title: "Promedio General",
      icon: <Award className="text-gray-600" size={24} />,
      value: "86.5",
      percentage: "-29%",
      description: "Respecto al semestre anterior",
    },
    {
      id: 3,
      title: "Tareas Completadas",
      icon: <BookCheck className="text-gray-600" size={24} />,
      value: "20/20",
      percentage: "100%",
      description: "",
    },
    {
      id: 4,
      title: "Promedio del Curso",
      icon: <CheckSquare className="text-gray-600" size={24} />,
      value: "75%",
      percentage: "+89%",
      description: "En el último periodo",
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
      {studentSummary.map((sumary) => (
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
              className={`w-10 h-6 flex items-center justify-center text-sm rounded text-center ${getBackgroundColor(sumary.percentage)} text-white`}
            >
              <p className="py-2">{sumary.percentage}</p>
            </div>
            <p className="text-black text-sm">{sumary.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashboardSummary