const { needleInHaystack } = require('./utils/utils')

exports.findWordInText = (req, res, next) => {

  const { word, text } = req.body;
  console.log(req.body)
  res.status(200).send({ word, text });
}