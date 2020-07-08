const { needleInHaystack } = require('./utils/utils')

exports.findWordInText = (req, res, next) => {
  const { word, text } = req.body.formInfo;
  let response = needleInHaystack(word, text);
  res.status(200).send({ result: response });
}