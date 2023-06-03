const express = require('express');
const ProductService = require('../services/productService');

const router = express.Router();
const service = new ProductService();
//get ----------
router.get('/', (req, res) => {
  const products = service.find();
  res.json(products)
})
router.get('/filter', (req, res) => {
  res.send('Esto es un filtro!')
})
router.get('/:id', (req, res) => {
  const {id} = req.params
  const product = service.findOne(id)
  res.json(product)
})

//post ----------
router.post('/', (req, res) => {
  const body = req.body
  res.status(201).json({
    message: 'created',
    data: body
  })
})

//patch ----------
router.patch('/:id', (req, res) => {
  const {id} = req.params
  const body = req.body
  res.json({
    message: 'updated',
    data: body,
    id
  })
})

//delete ----------
router.delete('/:id', (req, res) => {
  const {id} = req.params
  res.json({
    message: 'deleted',
    id
  })
})

module.exports = router