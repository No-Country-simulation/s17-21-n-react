/* eslint-disable react/prop-types */

const AttendanceButton = ({ icon, status, backgroundColor }) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center space-x-1 px-4 py-2 text-gray-700 w-[18px] md:w-auto rounded-full md:rounded-md bg-${backgroundColor}`}
    >
      {icon}
      {status}
    </button>
  );
};

export default AttendanceButton;
