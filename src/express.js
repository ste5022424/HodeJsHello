const express = require('express');
const app = express();
// const pack =require('nodejspackage55667');

app.get('/', (req, res) => res.send('Andy'));

app.get('/no', (req, res) => res.send('Hello No!'));

app.get('/error', (req, res) => res.send(500));

module.exports = app;
