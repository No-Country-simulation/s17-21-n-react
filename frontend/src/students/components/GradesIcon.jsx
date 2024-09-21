/* eslint-disable react/prop-types */
export default function GradesIcon({ item }) {
  const path =
    item.status === "completed"
      ? "M5 13l4 4L19 7"
      : item.status === "failed"
        ? "M6 18L18 6M6 6l12 12"
        : "M12 8v4l3 3M12 6a9 9 0 1 0 9 9";

  return (
    <svg
      xmlns="http://www.w3.org/200/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}
