/* eslint-disable react/prop-types */

const LINKEDIN_BASE_URL = "https://www.linkedin.com/in/";
const GITHUB_BASE_URL = "https://github.com/";

export function TeamCard({ profile }) {
  const { linkedin, github, photoUrl, name, surname, country } = profile;

  return (
    <div className="flex justify-center items-center border border-gray-300 rounded-lg p-4 w-full gap-4">
      <img
        src={photoUrl}
        alt={`${name} ${surname}`}
        className="rounded-full w-20 h-20 object-cover"
      />
      <div className="grid gap-2">
        <h3 className="text-lg font-bold">
          {name} {surname}
        </h3>
        <p className="flex items-center space-x-2">
          <a
            href={`${LINKEDIN_BASE_URL}${linkedin}`}
            className="no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white"
              alt="LinkedIn"
            />
          </a>
          <a
            href={`${GITHUB_BASE_URL}${github}`}
            className="no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white"
              alt="GitHub"
            />
          </a>
        </p>
        <img
          src={`https://flagcdn.com/64x48/${country}.png`}
          alt={`${country} flag`}
          className="w-8 h-6"
        />
      </div>
    </div>
  );
}
