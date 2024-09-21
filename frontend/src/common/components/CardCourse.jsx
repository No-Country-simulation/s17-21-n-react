/* eslint-disable react/prop-types */
import { useState } from "react";
import { Star, Clipboard, CheckCircle, BookOpen, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import useUserStore from "../../store/auth";
import { profile } from "../../common/assets";
import { categoryColors } from "../../public/data/categoryColors";

export default function CardCourse({
  name,
  description,
  image,
  category,
  rating,
  reviews,
  lessons,
  teacher,
  courseId,
  inviteLink = "https://example.com/invite",
}) {
  const { user } = useUserStore((state) => state);
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
      <div>
        <div className="relative">
          <span
            className={`absolute top-2 left-2 z-10 text-white text-xs font-semibold px-2 py-1 rounded ${categoryColors[category]}`}
          >
            {category}
          </span>
          <img
            alt="Course image"
            className="aspect-[4/3] object-cover w-full"
            src={image}
            height="200"
            width="300"
          />
        </div>
        <div className="p-6">
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
          <p className="text-gray-500 mb-4">{description}</p>

          <div className="flex items-center space-x-4 mb-4">
            <img
              alt="Teacher avatar"
              className="rounded-full"
              height="40"
              src={profile}
              style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
              width="40"
            />
            <span className="font-medium">{teacher}</span>
          </div>

          <div className="grid 2xl:grid-cols-2 items-center gap-4">
            <Link to={`${courseId}/classes`}>
              <button className="w-full justify-center font-semibold border border-blue-500 text-blue-500 lg:px-4 py-2 rounded hover:bg-blue-50 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Ver clases
              </button>
            </Link>

            {(user.role === "admin" || user.role === "teacher") && (
              <button
                onClick={() => setShowInvite(!showInvite)}
                className="w-full justify-center font-semibold text-base border border-green-500 text-green-500 px-3 py-2 rounded hover:bg-green-50 flex items-center gap-2"
              >
                <UserPlus className="h-4 w-4" />
                Invitar Alumnos
              </button>
            )}
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
