import { useEffect, useState } from "react";
import { bell, profile } from "../../assets";

const SessionNavbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  }, []);

  const userName = user?.name || "Sara";
  const userLastName = user?.lastName || "Smith";
  const userPhoto = user?.photo || profile; // consultar: Si hay que agregar alguna imagen por defecto o el back ya la genera?
  const notifications = user?.notifications || 3;

  return (
    <nav className="bg-white shadow-md h-16 flex items-center justify-between px-4 lg:px-8">
      <div />

      <div name="Notifications" className="flex items-center space-x-4">
        <div className="relative">
          <button className="text-gray-500 focus:outline-none">
            <img src={bell} className="h-7 w-7" alt="Notifications" />
          </button>
          {notifications > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full ring-2 ring-white bg-red-500 text-white text-xs font-bold flex items-center justify-center">
              {notifications}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <img className="w-9 h-9 rounded-full" src={userPhoto} alt="Avatar" />
          <span className="hidden lg:inline-block text-gray-700 font-semibold">
            {userName} {userLastName}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default SessionNavbar;
