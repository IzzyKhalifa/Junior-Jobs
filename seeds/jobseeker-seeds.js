const { JobSeeker } = require("../models");

const jobseekerData = [
  {
    first_name: "vladimir",
    email: "email@fuckyou.com",
    phone_number: "09437928463",
    last_name: "putin",
    github: "KGB",
    website: "Vodka",
  },
];

const seedjobseekers = () => JobSeeker.bulkCreate(jobseekerData);

module.exports = seedjobseekers;
