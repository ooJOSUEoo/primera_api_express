const express = require('express');
const UserService = require('../services/userService');
const validatorHandler = require('../middlewares/validatorHandler');
const { getProductSchema, createProductSchema, updateProductSchema } = require('../schemas/product.schema');

const router = express.Router();
const service = new UserService();
//get ----------
router.get('/', async (req, res) => {
  try{
    const users  = await service.find()
    res.json(users)
  } catch (error) {
    console.log(error);
    next(error)
  }
})
router.get('/:id', validatorHandler(getProductSchema,'params'), async (req, res, next) => {
  try {
    const {id} = req.params
    const product = await service.findOne(id)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

//post ----------
router.post('/', validatorHandler(createProductSchema,'body'), async (req, res) => {
  const body = req.body
  const product = await service.create(body)
  res.status(201).json(product)
})

//patch ----------
router.patch('/:id', validatorHandler(getProductSchema,'params'), validatorHandler(updateProductSchema,'body'), async (req, res) => {
  try {
    const {id} = req.params
    const body = req.body
    const product = await service.update(id, body)
    res.status(200).json(product)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
})

//delete ----------
router.delete('/:id', async (req, res) => {
  const {id} = req.params
  const product = await service.delete(id)
  product ? res.status(200).json(product) : res.status(404).json({message: 'not found'})
})

module.exports = router