import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex justify-center items-center space-x-2">
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
        <ChevronLeft className="h-4 w-4" />
        <ChevronLeft className="h-4 w-4 -ml-3" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
        <ChevronLeft className="h-4 w-4 -ml-3" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-500 text-white font-semibold">
        1
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-semibold">
        2
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-semibold">
        3
      </button>

      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
        <ChevronRight className="h-4 w-4" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
        <ChevronRight className="h-4 w-4 -mr-3" />
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
