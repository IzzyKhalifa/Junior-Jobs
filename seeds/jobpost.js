const { jobpost } = require('../models');

const jobPosts = [

    {
        id: '1',
        seeker_profile: dev,
        first_name: vladimir,
        last_name: putin,
        current_salary: 10000000000,
        is_annually_monthly: 100000000000,
        currency: USD
      },
  


];

const seedProducts = () => Product.bulkCreate(jobPosts);

module.exports = seedProducts;