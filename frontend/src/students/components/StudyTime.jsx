import { mockPieData } from "../data/dashboardStudents";

const StudyTime = () => {
  return (
    <div className="w-full p-4 bg-[#f4f5f9] shadow-lg rounded-lg">
      <h2 className="text-gray-500 font-semibold pb-5">Distribución del tiempo de estudio</h2>

      <div className="w-full flex flex-row lg:flex-col items-center justify-center mt-4">
        <div className="flex flex-col lg:flex-row justify-center flex-1 flex-wrap gap-4">
          {mockPieData.map((asignatura) => (
            <div key={asignatura.id} className="flex flex-row gap-2 items-center">
              <div className="size-6 md:size-9" style={{ backgroundColor: asignatura.color }}></div>
              <p className="text-xs md:text-base">{asignatura.label}</p>
            </div>
          ))}
        </div>
        <svg
          className="size-72 md:size-[481px]"
          width="481"
          height="481"
          viewBox="0 0 481 481"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400.304 313.986C417.574 276.431 421.066 233.994 410.167 194.122L240.507 240.5L400.304 313.986Z"
            fill="#969CE2"
          />
          <path
            d="M329.008 88.5086C348.968 100.132 366.443 115.572 380.435 133.949C394.428 152.326 404.664 173.278 410.559 195.611L240.5 240.5L329.008 88.5086Z"
            fill="#3440BF"
          />
          <path
            d="M293.761 72.8723C306.368 76.8776 318.483 82.2922 329.876 89.0136L240.506 240.5L293.761 72.8723Z"
            fill="#212879"
          />
          <path
            d="M294.858 73.2256C265.365 63.6421 233.862 62.0268 203.543 68.5434L240.504 240.5L294.858 73.2256Z"
            fill="#181D56"
          />
          <path
            d="M204.134 68.4163C159.939 77.757 121.033 103.743 95.4764 140.99C69.9202 178.236 59.674 223.888 66.861 268.483L240.504 240.499L204.134 68.4163Z"
            fill="#0E1133"
          />
          <path
            d="M66.5369 266.397C72.1159 303.875 89.6488 338.55 116.526 365.258C143.403 391.967 178.186 409.282 215.698 414.626C253.211 419.97 291.446 413.057 324.712 394.916C357.978 376.775 384.496 348.376 400.319 313.947L240.504 240.5L66.5369 266.397Z"
            fill="#FCB2B5"
          />
        </svg>
      </div>
    </div>
  );
};

export default StudyTime;
