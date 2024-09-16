import { Link } from "react-router-dom";
import Footer from "../../common/components/layout/Footer";
import { TeamCard } from "../components/TeamCard";
import { teamData } from "../data/teamData";
import { rightArrow } from "../../common/assets";

const groupByRole = (data) => {
  return data.reduce((acc, profile) => {
    if (!acc[profile.role]) {
      acc[profile.role] = [];
    }
    acc[profile.role].push(profile);
    return acc;
  }, {});
};

export default function TeamList() {
  const groupedData = groupByRole(teamData);

  return (
    <>
      <section className="sticky bg-white shadow-md top-0">
        <nav className="flex mx-auto justify-between w-full py-5 px-4 max-w-7xl">
          <div className="text-3xl font-bold text_primary">
            <Link to="/">
              Educa<span className="text-primary">Pro</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/login">
              <button className="btn bg-primary text-white flex items-center gap-2.5 px-9 py-2 rounded h-10">
                <p className="hidden md:block">Acceso</p>
                <img src={rightArrow} alt="button" width={14} height={14} />
              </button>
            </Link>
          </div>
        </nav>
      </section>
      <div className="grid gap-4 min-h-screen">
        {Object.keys(groupedData).map((role) => (
          <div key={role} className="w-full p-4 mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Equipo {role}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {groupedData[role].map((profile) => (
                <TeamCard key={profile.id} profile={profile} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
