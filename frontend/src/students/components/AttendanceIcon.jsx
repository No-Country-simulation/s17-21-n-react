/* eslint-disable react/prop-types */
const AttendanceIcon = ({ item }) => {
  const path =
    item.asistencia === "Presente"
      ? "M20.942 13.021a9 9 0 1 0 -9.407 7.967M12 7v5l3 3M15 19l2 2l4 -4"
      : item.asistencia === "Ausente"
        ? "M20.926 13.15a9 9 0 1 0 -7.835 7.784M12 7v5l2 2M22 22l-5 -5M17 22l5 -5"
        : "M20.975 11.33a9 9 0 1 0 -5.717 9.06M12 7v5l2 2M19 22v.01M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483";

  return (
    <svg
      xmlns="http://www.w3.org/200/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
};

export default AttendanceIcon;
