const apiRouter = require('express').Router();
const { findWordInText } = require('./controller');
const { send405Error } = require('./errors')

apiRouter
  .route('/')
  .post(findWordInText)
  .all(send405Error)

module.exports = apiRouter;