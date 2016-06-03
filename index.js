'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({
  port: process.env.PORT,
  host: process.env.IP
});
const Q = require('q')
const _ = require('lodash')
const watson  = require('watson-developer-cloud');

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
