/* eslint-disable react/prop-types */

const AttendanceButton = ({ children, className }) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center md:space-x-2 px-4 py-2 w-[18px] md:w-auto rounded-full md:rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default AttendanceButton;
