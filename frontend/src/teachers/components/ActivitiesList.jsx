/* eslint-disable react/prop-types */
import { useState } from "react";
import { ChevronDown, ChevronUp, CirclePlus } from "lucide-react";
import { Link } from "react-router-dom";
import { activitiesTeacherData } from "../data/activitiesTeacherData";

const AccordionItem = ({ title, date }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-lg rounded-lg border-gray-300 p-4 border border-b-2">
      <button
        className="flex justify-between items-center w-full pt-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-xl">{title}</span>
        {isOpen ? (
          <ChevronUp className="transition-transform" />
        ) : (
          <ChevronDown className="transition-transform" />
        )}
      </button>
      <span className="text-gray-500 mb-8">{date}</span>
      {isOpen && (
        <div className="p-4 text-black">
          <h1>Hola</h1>
        </div>
      )}
    </div>
  );
};

const ActivitiesList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8">Actividades del curso</h1>
      <div className="flex justify-end">
        <Link to="/newActivity">
          <button className="bg-primary p-4 w-56 h-10 flex text-white rounded-md items-center">
            <CirclePlus />
            <p className="p-4">Añadir Actividad</p>
          </button>
        </Link>
      </div>
      <div className="flex flex-col text-black gap-2 pt-5">
        {activitiesTeacherData.map((activity) => (
          <AccordionItem
            key={activity.id}
            title={activity.title}
            date={activity.date}
            content={activity.content}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesList;
