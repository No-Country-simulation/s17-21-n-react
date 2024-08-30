const DashboardTeachers = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Teacher Dashboard</h1>
        <p className="text-lg mt-2">
          Manage your courses, track student progress, and access teaching resources.
        </p>
      </header>

      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Course Management</h2>
            <p className="text-lg">Create, edit, and manage your courses and assignments.</p>
          </div>

          <div className="bg-green-100 p-4 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Student Tracking</h2>
            <p className="text-lg">
              Monitor student performance and track their progress over time.
            </p>
          </div>

          <div className="bg-yellow-100 p-4 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Teaching Resources</h2>
            <p className="text-lg">Access resources, teaching materials, and guidelines.</p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-8">
        <p className="text-sm">
          © {new Date().getFullYear()} Teacher Dashboard. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default DashboardTeachers;
