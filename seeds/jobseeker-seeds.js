const { Jobseeker } = require('../models');

const jobseekerData = [
  {
    
    first_name: 'vladimir',
    last_name: 'putin',
    Certificate: 'Monash bootcamp',
    linkedin: 'KGB',
    personal_Website:'Vodka'
  },

];

const seedjobseekers = () => Jobseeker.bulkCreate(jobseekerData);

module.exports = seedjobseekers;