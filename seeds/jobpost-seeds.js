const { Job } = require("../models");

const jobPosts = [
  {
    Company_name: "BobsBurgers",
    date_created: 21112022,
    city: "Melbourne",
    State: "QLD",
    Sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "bob@BobsBurgers.com",
    is_active: true,
  },

  {
    Company_name: "BobsBurgers",
    date_created: 21112022,
    city: "Melbourne",
    State: "QLD",
    Sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "bob@BobsBurgers.com",
    is_active: true,
  },

  {
    Company_name: "BobsBurgers",
    date_created: 21112022,
    city: "Melbourne",
    State: "QLD",
    Sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "bob@BobsBurgers.com",
    is_active: true,
  },

  {
    Company_name: "BobsBurgers",
    date_created: 21112022,
    city: "Melbourne",
    State: "QLD",
    Sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "bob@BobsBurgers.com",
    is_active: true,
  },

  {
    Company_name: "BobsBurgers",
    date_created: 21112022,
    city: "Melbourne",
    State: "QLD",
    Sector: "Hospitality",
    job_description:
      "developing the backend for bob so he can make more burgers.",
    company_website: "bob@BobsBurgers.com",
    is_active: true,
  },
];

const seedJobpost = () => Job.bulkCreate(jobPosts);

module.exports = seedJobpost;
