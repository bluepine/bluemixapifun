'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({
  port: process.env.PORT,
  host: process.env.IP
});
const Q = require('q')
const _ = require('lodash')

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
