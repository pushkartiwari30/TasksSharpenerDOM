const http = require('http');

const routes = require('./nodejstask10route');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);