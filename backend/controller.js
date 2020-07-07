const { needleInHaystack } = require('./utils/utils')

exports.findWordInText = (req, res, next) => {
  const { word, text } = req.body;

  res.status(200).send('results go here');
}