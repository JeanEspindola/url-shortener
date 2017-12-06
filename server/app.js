const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use('/api', proxy('https://impraise-shorty.herokuapp.com'));

module.exports = app;
