import { Users, School, Calendar, Star } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Estudiantes Activos",
    value: "20K",
    icon: <Users className="text-base_white h-8 w-8" />,
  },
  {
    id: 2,
    title: "Instituciones Asociadas",
    value: "50+",
    icon: <School className="text-base_white h-8 w-8" />,
  },
  {
    id: 3,
    title: "Gestiones Diarias",
    value: "500+",
    icon: <Calendar className="text-base_white h-8 w-8" />,
  },
  {
    id: 4,
    title: "Satisfacción del Cliente",
    value: "99%",
    icon: <Star className="text-base_white h-8 w-8" />,
  },
];

export function StatsHighLight() {
  return (
    <div className="w-full h-full">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary size-3 rounded-full" />
            <h2 className="text-primary uppercase font-semibold md:text-xl">
              Impacto educativo de excelencia
            </h2>
          </div>
          <h1 className="font-bold text-2xl md:text-[40px] text-center capitalize">
            Nuestros logros nos respaldan
          </h1>
        </div>

        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ id, title, value, icon }) => (
            <div
              key={id}
              className="relative bg-background_primary text-center py-8 mb-2 rounded-lg shadow-lg"
            >
              <div className="text-5xl font-extrabold">{value}</div>
              <div className="m-2 text-lg font-medium">{title}</div>
              <div className="absolute inset-x-0 bottom-[-30px] flex justify-center">
                <span className="bg-base_black rounded-full p-4 shadow-lg">{icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
