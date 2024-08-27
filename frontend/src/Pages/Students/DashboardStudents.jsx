const DashboardStudents = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Student Dashboard</h1>
        <p className="text-lg mt-2">
          View your academic progress, manage assignments, and access resources.
        </p>
      </header>

      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Academic Progress</h2>
            <p className="text-lg">
              Track your progress across different subjects and view your
              grades.
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Assignments</h2>
            <p className="text-lg">
              Manage and keep track of your assignments and deadlines.
            </p>
          </div>

          <div className="bg-yellow-100 p-4 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
            <p className="text-lg">
              Access study materials, guides, and other resources.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-8">
        <p className="text-sm">
          © {new Date().getFullYear()} Student Dashboard. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default DashboardStudents;
