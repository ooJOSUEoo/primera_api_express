const express = require('express');
const cors = require('cors');
const routerAPI = require('./routes/indexRoutes');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandle');
const {checkApiKey} = require('./middlewares/authHandler');

const app = express();
const port = process.env.PORT || 3000;

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

app.get('/api', (req, res) => {
  res.send(`
    <style>
      html {
        margin: 0 50px;
        font-family: sans-serif;
        background-color: #1a1a1a;
      }
      h1, p, b, li, pre {
        color: white;
      }
    </style>
    <h1>API en Express</h1>
    <p>Urls</p>
    <ul>
      <b>GET</b>
      <li>/api/v1/products</li>
      <br><br>  
      <b>GET/POST/PATCH/DELETE</b>
      <li>/api/v1/products/{id}</li>
    </ul>
    <br><br>
    <p>Body</p>
    <pre>
      {
        "name": "string",
        "price": "number",
        "image": "string"
      }
    </pre>
  `);
})

routerAPI(app);

app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
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
