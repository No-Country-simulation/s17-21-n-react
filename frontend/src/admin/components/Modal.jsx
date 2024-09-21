/* eslint-disable react/prop-types */
import { X } from "lucide-react";

export function Modal({ isOpen, onClose, title, onSubmit, submitText, cancelText, children }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm backdrop-brightness-75 p-4 z-20">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg border border-gray-300 max-h-screen overflow-y-auto">
        <header className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4">
          <h2 className="text-xl font-medium text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Close"
          >
            <X />
          </button>
        </header>
        <main className="text-gray-800 mb-4">
          <form onSubmit={handleSubmit}>
            {children}
            <footer className="flex justify-end space-x-3 mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 h-10 rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {submitText}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-200 text-gray-800 px-4 py-2 h-10 rounded-md font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                {cancelText}
              </button>
            </footer>
          </form>
        </main>
      </div>
    </div>
  );
}
