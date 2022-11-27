const { Company } = require("../models");

const companiesData = [
  {
    Company_name: "BobsBurgers",
    Location: "Brisbane",
    State: "QLD",
    Sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "www.BobsBurgers.com",
    date_created: "25/11/2022",
    is_active: true,
  },

  {
    Company_name: "Carlton United brewery",
    Location: "Melbourne",
    State: "VIC",
    Sector: "Hospitality",
    job_description: "developing the frontend and backend for beer.",
    company_website: "www.CBU.com",
    date_created: "22/11/2022",
    is_active: true,
  },

  {
    Company_name: "insomnia",
    Location: "Melbourne",
    State: "VIC",
    Sector: "IT",
    job_description: "developing frontend website for growing business.",
    company_website: "www.insomnia.com",
    date_created: "22/11/2022",
    is_active: true,
  },

  {
    Company_name: "CBA",
    Location: "Melbourne",
    State: "VIC",
    Sector: "Banking",
    job_description: "try to migrate legacy to the new ages lol",
    company_website: "www.cba.com",
    date_created: "22/11/2022",
    is_active: true,
  },

  {
    Company_name: "Medibank",
    Location: "Melbourne",
    State: "VIC",
    Sector: "health",
    job_description: "we are fucked send help",
    company_website: "www.medibank.com",
    date_created: "22/11/2022",
    is_active: true,
  },
];

const seedCompanies = () => Company.bulkCreate(companiesData);

module.exports = seedCompanies;
