const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');
const queryParser = require('express-query-int');

const port = 3003; //Porta do servidor
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());

server.listen(process.env.PORT || port, function() {
  console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;
