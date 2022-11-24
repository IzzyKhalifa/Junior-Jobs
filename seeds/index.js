const sequelize = require('../config/connection');
const seedCompanies = require('./companies-seed');
const seedJobpost = require('./jobpost-seeds');
const seedJobseekers = require('./jobseeker-seeds');



const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCompanies();
  console.log('\n----- Companies SEEDED -----\n');
  await seedJobpost();
  console.log('\n----- jobs SEEDED -----\n');
  await seedJobseekers();
  console.log('\n----- jobseekers SEEDED ------\n');
  

  process.exit(0);
};

seedAll();