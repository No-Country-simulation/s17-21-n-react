import { recentActivities, attendancePerClassroom } from "../data/activities";

const Badge = ({ children, color }) => {
  return (
    <div className={`inline-block ${color} font-bold text-xs rounded p-2`}>
      <span>{children}</span>
    </div>
  );
};

const TableCell = ({ children }) => {
  return (
    <td className="text-sm text-[#747A80] border-t-[1px] border-[#DEE2E6] p-3a truncate py-3">
      {children}
    </td>
  );
};

const ActivityOverview = () => {
  const getAttendenceBadgeColor = (type) => {
    let color =
      type === "Deficiente"
        ? "bg-badge_bg_yellow text-badge_yellow"
        : type === "Optima"
          ? "bg-badge_bg_green text-badge_green"
          : type === "Pésima"
            ? "bg-badge_bg_red text-badge_red"
            : "bg-badge_bg_blue text-badge_blue";

    return color;
  };

  const getActivityBadgeColor = (type) => {
    let color =
      type === "Tarea"
        ? "bg-badge_bg_blue text-badge_blue"
        : type === "Examen"
          ? "bg-badge_bg_yellow text-badge_yellow"
          : type === "Exposición"
            ? "bg-badge_bg_green text-badge_green"
            : "bg-badge_bg_red text-badge_red";

    return color;
  };

  const getStateColor = (type) => {
    let textColor =
      type === "Pendiente"
        ? "text-badge_yellow"
        : type === "Finalizado"
          ? "text-badge_green"
          : type === "Atrasado"
            ? "text-badge_red"
            : "text-badge_red";

    return textColor;
  };

  return (
    <div className="bg-white grid gap-6 grid-cols-1 lg:grid-cols-2">
      <div className="bg-background_primary w-1/2a border-[1px] border-[#E9EDF3] rounded-[5px] p-5 overflow-hidden">
        <h4 className="text-[#495057] font-semibold">Actividades Recientes</h4>
        <p className="text-[#6C757D] text-sm">
          Período de actividades del 26 de agosto al 30 de agosto
        </p>
        <table className="w-full mt-6">
          <thead>
            <tr className="grid grid-cols-[75px_1fr_75px_70px] gap-5 font-bold text-sm text-[#747A80]">
              <th className="text-start border-b-2 py-2 border-[#DEE2E6]">Fecha</th>
              <th className="text-start border-b-2 py-2 border-[#DEE2E6]">Actividad</th>
              <th className="text-start border-b-2 py-2 border-[#DEE2E6]">Tipo</th>
              <th className="text-start border-b-2 py-2 border-[#DEE2E6]">Estado</th>
            </tr>
          </thead>
          <tbody className="flex flex-col">
            {recentActivities.map((activity, index) => (
              <tr key={index} className="grid grid-cols-[75px_1fr_75px_70px] gap-5">
                <TableCell>{activity.date}</TableCell>
                <TableCell>{activity.activity}</TableCell>
                <TableCell>
                  <Badge color={getActivityBadgeColor(activity.type)}>{activity.type}</Badge>
                </TableCell>
                <TableCell>
                  <div className={`inline font-bold ${getStateColor(activity.state)}`}>
                    {activity.state}
                  </div>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-background_primary w-1/2a border-[1px] border-[#E9EDF3] rounded-[5px] p-5">
        <h4 className="text-[#495057] font-semibold">Asistencia General por Aula</h4>
        <p className="text-[#6C757D] text-sm">
          Período de actividades del 26 de agosto al 30 de agosto
        </p>
        <table className="w-full mt-6">
          <thead>
            <tr className="grid grid-cols-[100px_1fr_80px_40px] gap-5 font-bold text-sm text-[#747A80]">
              <th className="text-start border-b-2 border-[#DEE2E6]">Fecha</th>
              <th className="text-start border-b-2 border-[#DEE2E6]">Salón</th>
              <th className="text-start border-b-2 border-[#DEE2E6]">Asistencia</th>
            </tr>
          </thead>
          <tbody className="flex flex-col">
            {attendancePerClassroom.map((attendance, index) => (
              <tr key={index} className="grid grid-cols-[100px_1fr_80px_40px] gap-5">
                <TableCell>{attendance.date}</TableCell>
                <TableCell>{attendance.classroom}</TableCell>
                <TableCell>
                  <Badge color={getAttendenceBadgeColor(attendance.attendance)}>
                    {attendance.attendance}
                  </Badge>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityOverview;
