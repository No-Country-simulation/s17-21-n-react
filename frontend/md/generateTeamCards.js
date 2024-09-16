import { writeFile } from "fs";

function generateTeamCards(data) {
  let cardsMarkdown = `
<div style="display: flex; flex-wrap: wrap; justify-content: center;">
`;

  data.forEach(({ name, surname, linkedin, github, photoUrl, country }) => {
    const flagUrl = `https://flagcdn.com/64x48/${country}.png`; 

    cardsMarkdown += `
<div style="display: flex; align-items: center; border: 1px solid #e1e4e8; border-radius: 8px; padding: 10px; margin: 10px; width: 350px;">
  <img src="${photoUrl}" alt="${name} ${surname}" style="border-radius: 50%; width: 80px; height: 80px; object-fit: cover; margin-right: 15px;">
  <div>
    <h3 style="margin: 0; font-size: 1.2em;">${name} ${surname}</h3>
    <p style="margin: 5px 0;">
      <a href="https://www.linkedin.com/in/${linkedin}" style="text-decoration: none;">
        <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn">
      </a>
      <a href="https://github.com/${github}" style="text-decoration: none; margin-left: 10px;">
        <img src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white" alt="GitHub">
      </a>
    </p>
    <img src="${flagUrl}" alt="${country} flag" style="width: 32px; height: 24px; margin-top: 5px;">
  </div>
</div>
    `;
  });

  cardsMarkdown += `</div>`; 
  return cardsMarkdown;
}

const team = [
  {
    name: "Bárbara",
    surname: "Espinola",
    linkedin: "baesp",
    github: "BaEsp1",
    photoUrl: "https://ca.slack-edge.com/T02KS88FB0E-U06FUMJMWBE-ga7e55b4d232-512",
    country: "ar",
  },
  {
    name: "Gabriela",
    surname: "Patiño",
    linkedin: "gabyp05",
    github: "Gabyp05",
    photoUrl: "https://ca.slack-edge.com/T02KS88FB0E-U068XFC46AF-6d81166603d3-512",
    country: "ve",
  },
  {
    name: "Jorge",
    surname: "Henríquez",
    linkedin: "jorge-henriquez-novoa",
    github: "jorgea-hn",
    photoUrl: "https://ca.slack-edge.com/T02KS88FB0E-U04SP592UCC-e29f054eff2c-512",
    country: "co",
  },
  {
    name: "María",
    surname: "Maisterra",
    linkedin: "mariateresamaisterra",
    github: "mtmaisterra",
    photoUrl: "https://ca.slack-edge.com/T02KS88FB0E-U06FPA017D3-a1380fcf656b-512",
    country: "ar",
  },
  {
    name: "Max",
    surname: "Cereceda",
    linkedin: "maxcereceda",
    github: "maxcerecedadev",
    photoUrl: "https://ca.slack-edge.com/T02KS88FB0E-U04U4UP4ZGQ-1a2bfa6f9d2e-512",
    country: "pe",
  },
  {
    name: "Santiago",
    surname: "Gonzalez",
    linkedin: "santiago-gonzalez-torres-a42933261",
    github: "SantiagoGonzalez0892",
    photoUrl: "https://ca.slack-edge.com/T02KS88FB0E-U06QCQFPK5J-9b6c03d59878-512",
    country: "ar",
  },
];



const markdownContent = generateTeamCards(team);

writeFile("team-cards.md", markdownContent, (err) => {
  if (err) throw err;
  console.log("El archivo team-cards.md ha sido generado con éxito.");
});
