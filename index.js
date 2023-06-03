const express = require('express');
const {faker} = require('@faker-js/faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/products', (req, res) => {
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
app.get('/products/filter', (req, res) => {
  res.send('Esto es un filtro!')
})
app.get('/products/:id', (req, res) => {
  const {id} = req.params
  res.json({
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl()
  })
})

app.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.json({
      limit: 10,
      offset: 0
    })
  }
})

app.get('/categories/:cid/products/:pid', (req, res) => {
  const {cid, pid} = req.params;
  res.json({
    cid ,
    pid,
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
