const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use('http://localhost:8080/shorten', proxy('https://impraise-shorty.herokuapp.com/shorten'));

module.exports = app;
