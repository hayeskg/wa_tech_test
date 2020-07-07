const express = require('express');
const app = express();
const apiRouter = require('./router.js');

app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the server room.'))

app.use('/api', apiRouter);

module.exports = app;