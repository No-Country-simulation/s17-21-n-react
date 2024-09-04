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

const StatsHighLight = () => {
  return (
    <div className=" w-full h-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary size-3 rounded-full" />
            <h2 className="text-primary uppercase font-semibold md:text-2xl">
              Impacto educativo de excelencia
            </h2>
          </div>
          <h1 className="text-[#1F2126] font-bold text-2xl md:text-[40px] text-center capitalize">
            Nuestros logros nos respaldan
          </h1>
        </div>

        <dl className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ id, title, value, icon }) => (
            <div
              key={id}
              className="relative bg-background_primary flex flex-col items-center text-center py-8 mb-2 rounded-lg shadow-lg"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <dd className="text-4xl font-extrabold">{value}</dd>
                  <dt className="mt-2 text-lg font-medium">{title}</dt>
                </div>
                <div className="absolute inset-x-0 bottom-[-30px] flex justify-center">
                  <div className="bg-base_black rounded-full p-4 shadow-lg">{icon}</div>
                </div>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default StatsHighLight;
