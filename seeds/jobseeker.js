const { jobseeker } = require('../models');

const jobseekerData = [
  {
    id: '1',
    seeker_profile: dev,
    first_name: vladimir,
    last_name: putin,
    current_salary: 10000000000,
    is_annually_monthly: 100000000000,
    currency: USD
  },

  {
    id: '2',
    seeker_profile: dev,
    first_name: vladimir,
    last_name: putin,
    current_salary: 10000000000,
    is_annually_monthly: 100000000000,
    currency: USD
  },

  {
    id: '3',
    seeker_profile: dev,
    first_name: vladimir,
    last_name: putin,
    current_salary: 10000000000,
    is_annually_monthly: 100000000000,
    currency: USD
  },

  


];

const seedProducts = () => Product.bulkCreate(jobseekerData);

module.exports = seedProducts;