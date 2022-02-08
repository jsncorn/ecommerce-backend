const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500);
    });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500);
    });
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500);
    });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(tagData => {
      if (!tagData){
        res.status(404);
      }
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
    });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(tagData => {
    if (!dbTagData) {
      res.status(404);
    }
    res.json(tagData);
  })
  .catch(err =>{
    console.log(err);
    res.status(500);
  });
});

module.exports = router;