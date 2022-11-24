const { Company } = require('../models');

const companiesData = [
  
  {
    
    Company_name: 'BobsBurgers',
    Location: "Brisbane",
    State: "QLD",
    Sector: "Hospitality",
    job_description: "developing the backend for bob so he can make more burgers.",
    company_website: "www.BobsBurgers.com",
    date_created: "25/11/2022",
    is_active: true

  },


  {
    
    Company_name: "Carlton United brewery",
    Location: "Melbourne",
    State: 'VIC',
    Sector: "Hospitality",
    job_description: "developing the frontend and backend for beer.",
    company_website: "www.CBU.com",
    date_created: "22/11/2022",
    is_active: true

  },

];

const seedCompanies = () => Company.bulkCreate(companiesData);

module.exports = seedCompanies;