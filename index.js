const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: "Product 1",
    price: 100
  })
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
