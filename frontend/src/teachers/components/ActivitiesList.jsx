/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronDown, ChevronUp, CirclePlus } from "lucide-react";
import ClassDetail from "./ClassDetail";
import useUserStore from "../../store/auth";
import { getAllClassesBySubject } from "../../api/services/classService";
import Spinner from "../../common/utils/Spinner";
import AddClassModal from "../../admin/components/AddClassModal";

const AccordionItem = ({ title, date, user }) => {
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
          <ClassDetail role={user.role} />
        </div>
      )}
    </div>
  );
};

export default function ActivitiesList() {
  const { user } = useUserStore((state) => state);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchClasses = async () => {
    try {
      const fetchedClasses = await getAllClassesBySubject(id);
      setClasses(fetchedClasses);
    } catch (error) {
      console.error("Error al cargar las clases:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const fetchedClasses = await getAllClassesBySubject(id);
        setClasses(fetchedClasses);
      } catch (error) {
        console.error("Error al cargar las clases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, [id]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClassClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    fetchClasses();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8">Clases del curso</h1>

      {user.role === "admin" && (
        <div className="flex justify-end py-5">
          <button
            className="bg-primary p-4 w-56 h-10 flex justify-center text-white rounded-md items-center"
            onClick={handleAddClassClick}
          >
            <CirclePlus />
            <p className="p-4">Añadir Clase</p>
          </button>
        </div>
      )}

      {loading ? (
        <Spinner />
      ) : classes.length > 0 ? (
        <div className="flex flex-col text-black gap-2">
          {classes.map((cls) => (
            <AccordionItem
              key={cls.id}
              title={cls.name}
              date={new Date(cls.date).toLocaleDateString()}
              user={user}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-8 text-xl">
          <p>Ups, aún no hay clases definidas para este curso.</p>
          {user.role === "admin" && <p>Comienza a crear nuevas clases ahora.</p>}
        </div>
      )}

      <AddClassModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}
