const { jobseeker } = require('../models');

const jobseekerData = [
  {
    
    first_name: 'vladimir',
    last_name: 'putin',
    Certificate: 'Monash bootcamp',
    linkedin: 'KGB',
    personal_Website:'Vodka'
  },

];

const seedProducts = () => Product.bulkCreate(jobseekerData);

module.exports = seedProducts;