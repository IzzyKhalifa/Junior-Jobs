const { companies } = require('../models');

const companiesData = [
  {
    id: 'bobsburgers',
    company_name: BobsBurgers,
    profile_description: multinational,
    business_stream_id: xxxxxx,
    establishment_date: xxxxxx,
    company_website: www.BobsBurgers.com,
  },

  {
    id: 'mountain goat',
    company_name: mountain_goat,
    profile_description: multinational,
    business_stream_id: xxxxxx,
    establishment_date: xxxxxx,
    company_website: www.BobsBurgers.com,
  },
  
  {
    id: 'samsung',
    company_name: samsung,
    profile_description: multinational,
    business_stream_id: xxxxxx,
    establishment_date: xxxxxx,
    company_website: www.BobsBurgers.com,
  },
  


];

const seedProducts = () => Product.bulkCreate(companiesData);

module.exports = seedProducts;