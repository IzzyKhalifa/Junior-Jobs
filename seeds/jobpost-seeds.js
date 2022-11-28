const { Job } = require("../models");

const jobPosts = [
  {
    company_name: "BobsBurgers",
    date_created: 21112022,
    city: "Melbourne",
    state: "QLD",
    sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "bob@BobsBurgers.com",
    is_active: true,
  },

  {
    company_name: "BobsBurgers",
    date_created: 21112022,
    city: "Melbourne",
    state: "QLD",
    sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "bob@BobsBurgers.com",
    is_active: true,
  },

  {
    company_name: "BobsBurgers",
    date_created: 21112022,
    city: "Melbourne",
    state: "QLD",
    sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "bob@BobsBurgers.com",
    is_active: true,
  },

  {
    company_name: "BobsBurgers",
    date_created: 21112022,
    city: "Melbourne",
    state: "QLD",
    sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "bob@BobsBurgers.com",
    is_active: true,
  },

  {
    company_name: "BobsBurgers",
    date_created: 21112022,
    city: "Melbourne",
    state: "QLD",
    sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "bob@BobsBurgers.com",
    is_active: true,
  },
];

const seedJobpost = () => Job.bulkCreate(jobPosts);

module.exports = seedJobpost;
