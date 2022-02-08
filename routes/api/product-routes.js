const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

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
    ProductTag.findOne({
        where: {
            id: req.params.id
        },
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
        .then(productData => {
            if(!productData) {
                res.status(404);
            }
            res.json(productData)
        })
        .catch(err => {
            console.log(err);
            res.status(500);
        })
})

router.post('/', (req, res) => {
    Product.create({
        product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock,
        category_id: req.body.category_id,
        tagIds: req.body.tagIds
        })
        .then((product) => {
          if (req.body.tagIds.length) {
            const productTagIdArr = req.body.tagIds.map((tag_id) => {
              return {
                product_id: product.id,
                tag_id,
              };
            });
            return ProductTag.bulkCreate(productTagIdArr);
          }
          res.status(200).json(product);
        })
        .then((productTagIds) => res.status(200).json(productTagIds))
        .catch((err) => {
          console.log(err);
          res.status(404).json(err);
        })
})

router.put('/:id', (req, res) => {

})

router.delete('/id', (req, res) => {

})

module.exports = router;