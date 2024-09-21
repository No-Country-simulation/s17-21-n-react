import QualificationsBar from "./QualificationsBar";

const QualificationsProgress = () => {
  return (
    <div className="w-full p-4 bg-[#f4f5f9] shadow-lg rounded-lg">
      <h2 className="text-gray-500 font-semibold pb-5">Calificaciones por asignatura</h2>

      <div className="w-full aspect-[4/3]">
        <QualificationsBar />
      </div>
      <div className="flex justify-between px-2 md:px-4 mt-4 pt-5">
        <div className="text-center ">
          <p className="text-sm md:text-lg font-bold text-gray-700">17.5</p>
          <p className="text-gray-700">Promedio de Notas</p>
        </div>
        <div className="text-center ">
          <p className="text-sm md:text-lg font-bold text-gray-700">1589</p>
          <p>Total de evaluaciones</p>
        </div>
      </div>
    </div>
  );
};

export default QualificationsProgress;
