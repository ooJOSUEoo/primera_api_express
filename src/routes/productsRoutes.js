const express = require('express');
const {faker} = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = []
  const {size} = req.query
  const limit = size || 10
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      image: faker.image.imageUrl()
    })
  }
  res.json(products)
})
router.get('/filter', (req, res) => {
  res.send('Esto es un filtro!')
})
router.get('/:id', (req, res) => {
  const {id} = req.params
  res.json({
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl()
  })
})

router.post('/', (req, res) => {
  const body = req.body
  res.json({
    message: 'created',
    data: body
  })
})

module.exports = router