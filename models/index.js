const User = require('./User');

module.exports = { User };

// import models
const companies = require('./companies');
const jobseeker = require('./jobseeker');
const jobpost = require('./job');


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