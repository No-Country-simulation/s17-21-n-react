import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to Our Application!</h1>
        <p className="text-lg mt-2">Select your role to proceed.</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Students</h2>
          <p className="text-lg mb-4">Access your academic progress, assignments, and more.</p>
          <Link to="/students/dashboard" className="inline-block text-blue-500 hover:underline">Go to Student Dashboard</Link>
        </div>

        <div className="bg-green-100 p-4 rounded shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Teachers</h2>
          <p className="text-lg mb-4">Manage courses, track students, and access teaching resources.</p>
          <Link to="/teachers/dashboard" className="inline-block text-green-500 hover:underline">Go to Teacher Dashboard</Link>
        </div>

        <div className="bg-yellow-100 p-4 rounded shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Admin</h2>
          <p className="text-lg mb-4">Manage application settings, users, and view reports.</p>
          <Link to="/admin/dashboard" className="inline-block text-yellow-500 hover:underline">Go to Admin Dashboard</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
