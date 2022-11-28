const { Company } = require("../models");
const companiesData = [
  {
    company_name: "BobsBurgers",
    location: "Brisbane",
    state: "QLD",
    sector: "Hospitality",
    company_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "www.BobsBurgers.com",
    establishment_date: new Date(2022, 25, 11),
    is_active: true,
  },

  {
    company_name: "Carlton United brewery",
    location: "Melbourne",
    state: "VIC",
    sector: "Hospitality",
    company_description: "developing the frontend and backend for beer.",
    company_website: "www.CBU.com",
    establishment_date: new Date(2022, 22, 11),
    is_active: true,
  },
];

const seedCompanies = () => Company.bulkCreate(companiesData);

module.exports = seedCompanies;
