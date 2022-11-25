const { JobSeeker } = require("../models");

const jobseekerData = [
  {
    first_name: "vladimir",
    last_name: "putin",
    Certificate: "Monash bootcamp",
    linkedin: "KGB",
    personal_Website: "Vodka",
  },
];

const seedjobseekers = () => JobSeeker.bulkCreate(jobseekerData);

module.exports = seedjobseekers;
