import { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    const optimizedHandleScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", optimizedHandleScroll);

    return () => window.removeEventListener("scroll", optimizedHandleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 flex items-center justify-center bg-white rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 z-30"
      aria-label="Back to top"
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#00ADDE"
          strokeWidth="4"
          fill="transparent"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            transition: "stroke-dashoffset 0.35s",
          }}
        />
      </svg>
      <ArrowUp className="h-10 w-10 text-gray-600" />
    </button>
  );
}
