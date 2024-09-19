/* eslint-disable react/prop-types */

const AttendanceButton = ({ children, className }) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center space-x-2 px-4 py-2 w-auto rounded-md cursor-default ${className}`}
    >
      {children}
    </button>
  );
};

export default AttendanceButton;
