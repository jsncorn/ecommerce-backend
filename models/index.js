const Product = require('./product');
const Tag = require('./tag');
const Category = require('./category');
const ProductTag = require('./producttag');

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'
})

Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
})

module.exports = {
    Product, 
    Category,
    Tag,
    ProductTag
}