const { Job } = require("../models");

const jobPosts = [
  {
    company_name: "CUB",
    date_created: new Date(2022, 25, 11),
    city: "Melbourne",
    state: "VIC",
    sector: "Hospitality",
    job_description:
      "front end dev for updating the current website",
    company_website: "www.CUB.com",
    is_active: true,
  },

  {
    company_name: "BobsBurgers",
    date_created: new Date(2022, 22, 11),
    city: "Brisbane",
    state: "QLD",
    sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "www.BobsBurgers.com",
    is_active: true,
  },

  {
    company_name: "CBA",
    date_created: new Date(2022, 21, 11),
    city: "Sydney",
    state: "NSW",
    sector: "Hospitality",
    job_description:
      "Change the legacy software to current frontend .",
    company_website: "www.CBA.com",
    is_active: true,
  },

  {
    company_name: "Shell",
    date_created: new Date(2022, 19, 06),
    city: "Perth",
    state: "WA",
    sector: "Energy",
    job_description:
      "Developing backend for new servicestations",
    company_website: "www.Shell.com",
    is_active: true,
  },

  {
    company_name: "Sony",
    date_created: new Date(2022, 16, 04),
    city: "Melbourne",
    state: "VIC",
    sector: "Technology",
    job_description:
      "Develop a new inhouse social media forum for employees",
    company_website: "www.Sony.com",
    is_active: true,
  },
];

const seedJobpost = () => Job.bulkCreate(jobPosts);

module.exports = seedJobpost;
