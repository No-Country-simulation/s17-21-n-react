const DashboardAdmin = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-lg mt-2">
          Manage the application settings, users, and more.
        </p>
      </header>

      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Admin Features</h2>
        <div className="flex justify-center space-x-4">
          <div className="bg-gray-100 p-4 rounded shadow-md w-1/3">
            <h3 className="text-xl font-semibold">User Management</h3>
            <p className="mt-2">Add, remove, or modify user accounts.</p>
          </div>

          <div className="bg-gray-100 p-4 rounded shadow-md w-1/3">
            <h3 className="text-xl font-semibold">Reports</h3>
            <p className="mt-2">Generate and view system reports.</p>
          </div>

          <div className="bg-gray-100 p-4 rounded shadow-md w-1/3">
            <h3 className="text-xl font-semibold">Settings</h3>
            <p className="mt-2">Configure application settings.</p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-8">
        <p className="text-sm">
          © {new Date().getFullYear()} Admin Dashboard. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default DashboardAdmin;
