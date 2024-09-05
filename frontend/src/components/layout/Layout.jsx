/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./config/Sidebar";
import { Menu } from "lucide-react";
import SessionNavbar from "./SessionNavbar";

export default function Layout({ userRole }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (

    <div className="relative overflow-hidden">

      {/* Pasa userRole al Sidebar */}
      <Sidebar isOpen={isSidebarOpen} sidebarRef={sidebarRef} userRole={userRole} />
      <SessionNavbar/>

      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-base_black opacity-50 z-30 lg:hidden"
        ></div>
      )}

      <div className={`flex-1 p-4 transition-all duration-300 ease-in-out lg:ml-64`}>
        <button onClick={toggleSidebar} className={`lg:hidden p-2 absolute top-4 left-4`}>
          <Menu className="w-6 h-6" />
        </button>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
