/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SidebarConfig } from "./sidebarConfig";
import useUserStore from "../../../../store/auth";

export default function Sidebar({ isOpen, sidebarRef, userRole }) {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = SidebarConfig[userRole] || [];

  const { logout } = useUserStore();

  const handleLogout = () => {
    logout();
    alert("You have successfully logged out!");
    navigate("/");
  };

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 z-40 h-screen w-64 bg-secondary text-base_white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col`}
    >
      <div className="flex h-auto items-center border-b border-slate-700 p-8 justify-between">
        <h1 className="text-4xl font-bold">
          Educa<span className="text-primary">Pro</span>
        </h1>
      </div>
      <div className="flex-1 px-4 py-4 overflow-y-auto">
        <nav className="space-y-2">
          <p className="text-text_secondary font-bold text-xs">MENU</p>
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`flex w-full items-center justify-start p-2 ${
                  isActive
                    ? "bg-primary text-white rounded-lg"
                    : "text-text_secondary hover:bg-secondary_hover hover:text-base_white"
                }`}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
                {item.notification && (
                  <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs">
                    {item.notification}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-end p-4 border-t border-slate-700 mt-auto">
        <button
          className="w-full py-2 bg-warning text-white rounded-lg hover:bg-warning_hover"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
