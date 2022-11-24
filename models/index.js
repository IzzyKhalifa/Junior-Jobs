const User = require('./User');
const companies = require('./companies');
const job = require('./job');
const jobseeker = require('./jobseeker')


module.exports = { User, companies, job, jobseeker};

// import models



// // Products belongTo Category3
// Product.belongsTo(Category);
// // Categories have many Products
// Category.hasMany(Product);
// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, { 
//     through: ProductTag,
//     foreignKey: 'product_id'
//     });
// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, { 
//     through : ProductTag,
//     foreignKey: 'tag_id',
//     });
    
// module.exports = {
//     Product,
//     Category,
//     Tag,
//     ProductTag,
// };