const seedCompanies = require('./companies-seed');
// const seedjobpost = require('./jobpost-seeds');
// const seedjobseekers = require('./jobseeker-seeds');
;

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCompanies();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  process.exit(0);
};

seedAll();