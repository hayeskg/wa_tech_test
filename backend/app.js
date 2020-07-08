const express = require('express');
const app = express();
const cors = require('cors')
const apiRouter = require('./router.js');
const endpointsJSON = require('../endpoints.json');
const {
  send500Error,
  send405Error,
  send404Error
} = require('./errors')

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => { res.status(200).send(endpointsJSON) })

app.use('/api', apiRouter).all(send405Error);

app.all('/*', send404Error);
app.use(send500Error)

module.exports = app;