const http = require('http');
const { routes } = require('./routes');

const port = 3000;

const server = http.createServer((req, res) => routes(req, res)).listen(port);

server.on('listening', () => {
  console.log('Server is listening on port', server.address().port);
});
