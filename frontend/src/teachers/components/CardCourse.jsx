/* eslint-disable react/prop-types */
import { useState } from "react";
import { Star, Clipboard, CheckCircle, BookOpen, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../../common/assets";

export default function CardCourse({
  name,
  description,
  startDate,
  duration,
  image,
  category,
  rating,
  reviews,
  lessons,
  instructor,
  courseId,
  inviteLink = "https://example.com/invite",
}) {
  const [copied, setCopied] = useState(false);
  const [showInvite, setShowInvite] = useState(false);

  const handleInviteClick = () => {
    navigator.clipboard.writeText(inviteLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="overflow-hidden border rounded-lg shadow-md">
      <div className="md:flex">
        <div className="md:w-1/3 relative">
          <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {category}
          </span>
          <img
            alt="Course image"
            className="aspect-[4/3] object-cover w-full"
            src={image}
            height="300"
            width="400"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span className="flex items-center">
              <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
              {rating}
            </span>
            <span>({reviews})</span>
            <span>•</span>
            <span>{lessons} Clases</span>
          </div>

          <h3 className="text-2xl font-bold mt-2 mb-2">{name}</h3>

          {/* Nueva sección para la fecha de inicio y duración */}
          <div className="text-gray-600 text-sm mb-4">
            <p>
              <strong>Fecha de inicio:</strong> {startDate}
            </p>
            <p>
              <strong>Duración:</strong> {duration}
            </p>
          </div>

          <p className="text-gray-500 mb-4">{description}</p>

          <div className="flex items-center space-x-4 mb-4">
            <img
              alt="Instructor avatar"
              className="rounded-full"
              height="40"
              src={profile}
              style={{
                aspectRatio: "1 / 1",
                objectFit: "cover",
              }}
              width="40"
            />
            <span className="font-medium">{instructor}</span>
          </div>

          <div className="flex justify-start items-center gap-4">
            <Link to={`/courses/${courseId}/classes`}>
              <button className="font font-semibold text-base border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Ver Actividades
              </button>
            </Link>
            <button
              onClick={() => setShowInvite(!showInvite)}
              className="font font-semibold text-base border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 flex items-center"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Invitar Alumnos
            </button>
          </div>

          {showInvite && (
            <div className="mt-6 p-6 bg-white border border-blue-300 rounded-lg shadow-sm transition-transform transform ease-in-out duration-300">
              <p className="text-sm text-gray-700 mb-4">
                Comparte este enlace con tus alumnos para que se unan al curso:
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-semibold break-all">{inviteLink}</span>
                <button
                  onClick={handleInviteClick}
                  className="ml-4 font-semibold py-1 px-3 rounded flex items-center bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-1" /> Enlace Copiado
                    </>
                  ) : (
                    <>
                      <Clipboard className="h-4 w-4 mr-1" /> Copiar Enlace
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
