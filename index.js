var server = new Hapi.Server();
server.connection({
	port: process.env.PORT,
	host: process.env.IP
});
var q = require('q')
var _ = require('lodash')
