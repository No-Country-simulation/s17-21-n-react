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
  event: "Tarea",
  noEventsInRange: "No hay tareas",
};

const events = [
  {
    title: "Inicio de Clases",
    start: dayjs("2024-09-02T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-02T17:00:00-05:00").toDate(),
    data: {
      type: "evento",
    },
  },
  {
    title: "Entrega de Trabajo Práctico #1",
    start: dayjs("2024-09-09T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-09T12:30:00-05:00").toDate(),
    data: {
      type: "tarea",
    },
  },
  {
    title: "Examen de Matemáticas",
    start: dayjs("2024-09-12T07:00:00-05:00").toDate(),
    end: dayjs("2024-09-12T16:00:00-05:00").toDate(),
    data: {
      type: "examen",
    },
  },
  {
    title: "Excursión Educativa",
    start: dayjs("2024-09-17T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-17T17:30:00-05:00").toDate(),
    data: {
      type: "evento",
    },
  },
  {
    title: "Entrega de Proyecto Final",
    start: dayjs("2024-09-20T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-20T17:30:00-05:00").toDate(),
    data: {
      type: "tarea",
    },
  },
  {
    title: "Charla de Orientación Vocacional",
    start: dayjs("2024-09-23T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-23T17:30:00-05:00").toDate(),
    data: {
      type: "evento",
    },
  },
  {
    title: "Examen Final de Física",
    start: dayjs("2024-09-27T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-27T17:30:00-05:00").toDate(),
    data: {
      type: "examen",
    },
  },
  {
    title: "Entrega de Trabajo Práctico #2",
    start: dayjs("2024-09-30T08:00:00-05:00").toDate(),
    end: dayjs("2024-09-30T17:30:00-05:00").toDate(),
    data: {
      type: "tarea",
    },
  },
];

const components = {
  event: (props) => {
    const { data } = props.event;
    if (data.type === "evento") {
      return <div className="bg-blue-200 text-black rounded-md p-2">{props.title}</div>;
    } else if (data.type === "tarea") {
      return <div className="bg-yellow-200 text-black rounded-md p-2">{props.title}</div>;
    } else if (data.type === "examen") {
      return <div className="bg-red-200 text-black rounded-md p-2">{props.title}</div>;
    } else {
      return <div className="bg-gray-200 text-black rounded-md p-2">{props.title}</div>;
    }
  },
};

const CalendarComponent = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <button className="p-3 bg-[#10B981] text-white rounded-lg justify-end max-w-40">
        + Agregar Tarea
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
