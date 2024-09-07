import { bell } from "../../assets";
import useUserStore from "../../store/auth";
import { generateAvatar } from "../../utils/avatar";

const SessionNavbar = () => {
  const { user } = useUserStore((state) => ({
    user: state.user,
  }));

  const userName = user?.name;
  const userLastName = user?.lastName;
  const userPhoto = user?.photo;

  // Generar avatar si no hay foto de perfil
  const { initials, backgroundColor } = userPhoto
    ? { initials: "", backgroundColor: "" }
    : generateAvatar(userName, userLastName);

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
          {userPhoto ? (
            <img className="w-9 h-9 rounded-full" src={userPhoto} alt="Avatar" />
          ) : (
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ backgroundColor }}
            >
              <span className="text-white font-bold text-sm">{initials}</span>
            </div>
          )}
          <span className="hidden lg:inline-block text-gray-700 font-semibold">
            {userName} {userLastName}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default SessionNavbar;
