const router = require('express').Router();
const { Product, Category, Tag, ProductTag} = require('../../models');

router.get('/', (req, res) => {
    Product.findAll({
        attributes: ['id', 'product_name', 'price', 'stock'],
        include: [
            {
                model: Category,
                attributes: ['category_name']
            },
            {
                model: Tag,
                attributes: ['tag_name']
            }
        ]
    })
    .then(productData => res.json(productData))
    .catch(err => {
        console.log(err);
        res.status(500);
    })
})

router.get('/:id', (req, res) => {
    
})

router.post('/', (req, res) => {
    
})

router.put('/:id', (req, res) => {
    
})

router.delete('/id', (req, res) => {
    
})

module.exports = router;