import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex justify-center items-center space-x-2">
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
        <ChevronsLeft className="size-4" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
        <ChevronLeft className="size-4" />
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
        <ChevronRight className="size-4" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
        <ChevronsRight className="size-4" />
      </button>
    </div>
  );
}
