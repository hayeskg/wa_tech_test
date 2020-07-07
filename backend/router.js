const apiRouter = require('express').Router();
const endpointsJSON = require('../endpoints.json');
const { findWordInText } = require('./controller');

apiRouter
  .route('/')
  .get((req, res) => { res.status(200).send(endpointsJSON) })
  .post(findWordInText)

module.exports = apiRouter;