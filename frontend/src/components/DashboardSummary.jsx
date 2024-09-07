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
        <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full items-center justify-center mx-10">
            {summary.map((sumary) => (
                <div className="w-3/4 flex flex-col h-auto justify-center gap-1 shadow-xl" key={sumary.id}>
                    <div className="w-auto text-center h-auto text-black font-bold text-xl my-10">
                        <div className=" flex flex-row items-center justify-around">
                            <h2>{sumary.title}</h2>
                            <h2 className="text-lg">{sumary.icon}</h2>
                        </div>
                        <h2 className="w-10 text-2xl mx-auto text-center">{sumary.value}</h2>
                    </div>
                    <div className="flex justify-around mb-6">
                        <div className={`w-10 h-auto text-sm mx-4 rounded text-center ${getBackgroundColor(sumary.percentage)} text-white`}>
                            <p className="py-2">{sumary.percentage}</p>
                        </div>
                        <p className="text-black text-lg text-center">{sumary.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardSummary;
