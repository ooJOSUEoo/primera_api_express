const express = require('express');
const routerAPI = require('./routes/indexRoutes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

routerAPI(app);

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
