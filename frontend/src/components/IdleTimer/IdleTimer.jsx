/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import LockScreen from "../../pages/lockscreen/LockScreen";

const IdleTimer = ({ children }) => {
  const [isIdle, setIsIdle] = useState(() => {
    // Recuperamos el estado de bloqueo del localStorage
    return localStorage.getItem("isIdle") === "true";
  });
  const timerRef = useRef(null);

  const handleActivity = () => {
    if (!isIdle) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setIsIdle(true);
        localStorage.setItem("isIdle", "true");
      }, 5 * 1000); // 5 segundos para pruebas
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("scroll", handleActivity);

    if (!isIdle) {
      timerRef.current = setTimeout(() => {
        setIsIdle(true);
        localStorage.setItem("isIdle", "true");
      }, 5 * 1000); // 5 segundos para pruebas
    }

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, );

  const handleUnlock = () => {
    setIsIdle(false);
    localStorage.setItem("isIdle", "false");
    handleActivity();
  };

  return (
    <div className="relative">
      {children}
      {isIdle && <LockScreen onUnlock={handleUnlock} />}
    </div>
  );
};

export default IdleTimer;
