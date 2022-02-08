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
            if (!categoryData) {
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
    Category.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: Product,
            attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
    })
        .then(categoryData => {
            if (!categoryData) {
                res.status(404);
            }
            res.json(categoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500);
        })
})

router.post('/', (req, res) => {
    Category.create({
        category_name: req.body.category_name
    })
        .then(categoryData => {
            if (!categoryData) {
                res.status(404);
            }
            res.json(categoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500);
        })
})

router.put('/:id', (req, res) => {
    Category.update(req.body, {
        where: {
            id: req.params.id
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

router.delete('/:id', (req, res) => {

})

module.exports = router;