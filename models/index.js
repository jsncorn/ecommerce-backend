const Product = require('./product');
const Cateogry = require('./category');
const Tag = require('./tag');
const Category = require('./category');

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

Product.belongsToMany(Tag)

Tag.belongsToMany(Product)

module.exports = {
    Product, 
    Category,
    Tag
}