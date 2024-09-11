import { useState } from 'react';
import { ChevronDown, CirclePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Activities = [
    {
        id: 1,
        title: 'MAT301 Clase 1',
        date: '31/08/24',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
        id: 2,
        title: 'MAT301 Clase 2',
        date: '07/09/24',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 3,
        title: 'MAT301 Clase 3',
        date: '14/09/24',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 4,
        title: 'MAT301 Clase 4',
        date: '21/09/24',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 5,
        title: 'MAT301 Clase 5',
        date: '28/09/24',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 6,
        title: 'MAT301 Clase 6',
        date: '05/10/24',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 7,
        title: 'MAT301 Clase 7',
        date: '12/10/24',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 8,
        title: 'MAT301 Clase 8',
        date: '19/10/24',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
];

const AccordionItem = ({ title, date, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b-8 border-gray-300 py-6">
            <button
                className="flex justify-between items-center w-full pt-4 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='font-bold text-xl'>{title}</span>
                <ChevronDown className={`transition-transform ${isOpen}`} />
            </button>
            <span className='text-gray-500 mb-8'>{date}</span>
            {isOpen && (
                <div className="p-4 text-black">
                    {content}
                </div>
            )}
        </div>
    );
};

const ActivitiesList = () => {
    return (
        <div className="container mx-auto p-4 fixed right-14">
            <h1 className="text-4xl font-bold mb-8">Actividades del curso</h1>
            <Link to='/newActivity'>
                <button className='bg-primary px-4 w-60 flex flex-row text-white rounded-md items-center fixed right-14 mr-4 mb-28'>
                    <CirclePlus />
                    <p className='p-4 text-xl'>Añadir Actividad</p>
                </button>
            </Link>
            <div className="flex flex-col text-black mb-12 mt-20 ">
                {Activities.map((activity) => (
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

