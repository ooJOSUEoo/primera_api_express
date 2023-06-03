const express = require('express');
const cors = require('cors');
const routerAPI = require('./routes/indexRoutes');
const { logErrors, errorHandler } = require('./middlewares/errorHandle');
const app = express();
const port = 3000;

app.use(express.json());

const whilelist = ['http://localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if (whilelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not access'));
    }
  },
}
app.use(cors()); //cualquier origen

app.get('/', (req, res) => {
  res.send('Hello World!');
})

routerAPI(app);

app.use(logErrors)
app.use(errorHandler)

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
