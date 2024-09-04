import PropTypes from "prop-types";

const AttendanceButton = ({ children, backgroundColor }) => {
  return (
    <button
      className={`w-[18px] md:w-auto max-w-20 h-auto md:px-1.5 text-xs lg:text-base font-normal text-white text-center rounded-full md:rounded-lg bg-${backgroundColor}`}
    >
      {children}
    </button>
  );
};

AttendanceButton.propTypes = {
  children: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default AttendanceButton;
