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
  const product = service.create(body)
  res.status(201).json(product)
})

//patch ----------
router.patch('/:id', (req, res) => {
  const {id} = req.params
  const body = req.body
  const product = service.update(id, body)
  product ? res.status(200).json(product) : res.status(404).json({message: 'not found'})
})

//delete ----------
router.delete('/:id', (req, res) => {
  const {id} = req.params
  const product = service.delete(id)
  product ? res.status(200).json(product) : res.status(404).json({message: 'not found'})
})

module.exports = router