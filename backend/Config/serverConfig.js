const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

module.exports = { app, server };
