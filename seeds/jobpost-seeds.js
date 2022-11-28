const { Job } = require("../models");

const jobPosts = [
  {
    company_name: "BobsBurgers",
    date_created: 2112022,
    city: "Melbourne",
    state: "QLD",
    Sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "bob@BobsBurgers.com",
    is_active: true,
  },

  {
    company_name: "macdonald",
    date_created: 2112022,
    city: "sydney",
    state: "QLD",
    Sector: "Hospitality",
    job_description:
      "making frontend for new range of food.",
    company_website: "www.macdonalds.com",
    is_active: true,
  },

  {
    company_name: "insomnia",
    date_created: 2112022,
    city: "sydney",
    state: "QLD",
    Sector: "tech",
    job_description: "developing frontend website for growing business.",
    company_website: "www.insomnia.com",
    is_active: true,
  },

  {
    company_name: "CBA",
    date_created: 2112022,
    city: "sydney",
    state: "QLD",
    Sector: "Finance",
    job_description: "try to migrate legacy to the new ages lol",
    company_website: "www.cba.com",
    is_active: true,
  },

  {
    Company_name: "Medibank",
    date_created: 2112022,
    city: "sydney",
    state: "QLD",
    Sector: "Finance",
    job_description: "we are fucked send help",
    company_website: "www.medibank.com",
    is_active: true,
  },
];

const seedJobpost = () => Job.bulkCreate(jobPosts);

module.exports = seedJobpost;
