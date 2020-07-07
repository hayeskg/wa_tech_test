exports.send500Error = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: 'Internal Server Error' });
};

exports.send405Error = (req, res, next) => {
  res.status(405).send({ msg: 'Method not allowed' });
};

exports.send404Error = (req, res, next) => {
  res.status(404).send({ msg: 'Route not found' })
};