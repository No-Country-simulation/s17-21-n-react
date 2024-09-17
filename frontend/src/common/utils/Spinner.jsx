export default function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-primary border-r-transparent border-b-primary border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-transparent border-r-primary border-b-transparent border-l-primary rounded-full animate-spin-reverse"></div>
      </div>
    </div>
  );
}
