const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
    Category.findAll({
        include: {
            model: Product,
            attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
    })
    .then(categoryData => {
        if(!categoryData) {
            res.status(404);
        }
        res.json(categoryData);
    })
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

router.delete('/:id', (req, res) => {
    
})

module.exports = router;