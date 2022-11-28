const { Job } = require("../models");

const jobPosts = [
  {
    company_name: "BobsBurgers",
    date_created: new Date(2022, 25, 11),
    city: "Melbourne",
    state: "QLD",
    sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "www.BobsBurgers.com",
    is_active: true,
  },

  {
    company_name: "BobsBurgers",
    date_created: new Date(2022, 22, 11),
    city: "Melbourne",
    state: "QLD",
    sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "www.BobsBurgers.com",
    is_active: true,
  },

  {
    company_name: "BobsBurgers",
    date_created: new Date(2022, 21, 11),
    city: "Melbourne",
    state: "QLD",
    sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "www.BobsBurgers.com",
    is_active: true,
  },

  {
    company_name: "BobsBurgers",
    date_created: new Date(2022, 19, 06),
    city: "Melbourne",
    state: "QLD",
    sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "www.BobsBurgers.com",
    is_active: true,
  },

  {
    company_name: "BobsBurgers",
    date_created: new Date(2022, 16, 04),
    city: "Melbourne",
    state: "QLD",
    sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "www.BobsBurgers.com",
    is_active: true,
  },
];

const seedJobpost = () => Job.bulkCreate(jobPosts);

module.exports = seedJobpost;
