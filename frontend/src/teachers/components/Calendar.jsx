import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");
const localizer = dayjsLocalizer(dayjs);
const messages = {
  allDay: "Todo el día",
  previous: "Anterior",
  next: "Siguiente",
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  noEventsInRange: "Sin eventos",
};

// const min = dayjs().hour(8).minute(0).toDate();
// const max = dayjs().hour(18).minute(0).toDate();

const events = [
  {
    title: "Primer Día de Clases",
    start: dayjs("2024-09-02T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-02T17:00:00-05:00").toDate(),
    data: {
      type: "evento",
    },
  },
  {
    title: "Conferencia de Padres y Maestros",
    start: dayjs("2024-09-05T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-05T10:30:00-05:00").toDate(),
    data: {
      type: "reunion",
    },
  },
  {
    title: "Taller de Matemáticas",
    start: dayjs("2024-09-09T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-09T12:30:00-05:00").toDate(),
    data: {
      type: "asignatura",
    },
  },
  {
    title: "Feria de Ciencias",
    start: dayjs("2024-09-12T07:00:00-05:00").toDate(),
    end: dayjs("2024-09-12T16:00:00-05:00").toDate(),
    data: {
      type: "asignatura",
    },
  },
  {
    title: "Excursión Escolar",
    start: dayjs("2024-09-17T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-17T17:30:00-05:00").toDate(),
    data: {
      type: "paseo",
    },
  },
  {
    title: "Exposición de Arte",
    start: dayjs("2024-09-20T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-20T17:30:00-05:00").toDate(),
    data: {
      type: "asignatura",
    },
  },
  {
    title: "Desarrollo Profesional",
    start: dayjs("2024-09-23T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-23T17:30:00-05:00").toDate(),
    data: {
      type: "evento",
    },
  },
  {
    title: "Reunión de Personal",
    start: dayjs("2024-09-25T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-25T17:30:00-05:00").toDate(),
    data: {
      type: "reunion",
    },
  },
  {
    title: "Exámenes Finales",
    start: dayjs("2024-09-27T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-27T17:30:00-05:00").toDate(),
    data: {
      type: "asignatura",
    },
  },
  {
    title: "Fecha Límite de Entrega de Calificaciones",
    start: dayjs("2024-09-30T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-30T17:30:00-05:00").toDate(),
    data: {
      type: "evento",
    },
  },
];

const components = {
  event: (props) => {
    const { data } = props.event;
    if (data.type === "evento") {
      return <div className="bg-blue-200 text-black rounded-md p-2">{props.title}</div>;
    } else if (data.type === "reunion") {
      return <div className="bg-green-200 text-black rounded-md p-2">{props.title}</div>;
    } else if (data.type === "asignatura") {
      return <div className="bg-purple-200 text-black rounded-md p-2">{props.title}</div>;
    } else {
      return <div className="bg-red-200 text-black rounded-md p-2">{props.title}</div>;
    }
  },
};

const CalendarComponent = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <button className="p-3 bg-[#10B981] text-white rounded-lg justify-end max-w-40">
        + Agregar Evento
      </button>
      <Calendar
        localizer={localizer}
        messages={messages}
        style={{ height: 600 }}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month", "agenda"]}
        components={components}
      />
    </div>
  );
};

export default CalendarComponent;
