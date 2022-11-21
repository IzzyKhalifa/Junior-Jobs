const { DataTypes } = require('sequelize');
const { validate } = require('uuid');
const { jobpost } = require('../models');

const jobPosts = [

    {
        company_name: 'optus',
        date_created: 21112022,
        is_active: true,
        job_description: xxxxxxxxxxxxxxx,
        company_contact:'optus@hacked.com'

      },
  


];

const seedProducts = () => Product.bulkCreate(jobPosts);

module.exports = seedProducts;