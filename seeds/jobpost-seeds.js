const { DataTypes } = require('sequelize');
const { validate } = require('uuid');
const { jobPost } = require('../models');

const jobPosts = [

    {
        company_name: 'BobsBurgers',
        date_created: 21112022,
        is_active: true,
        job_description: "xxxxxxxxxxxxxxx",
        company_contact:'bob@BobsBurgers.com'

      },
  


];

const seedProducts = () => Product.bulkCreate(jobPosts);

module.exports = seedProducts;