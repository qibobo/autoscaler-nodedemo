var http = require('http');

var server = http.createServer(function handler(req, res) {
  res.end('Hello, Auto-Scaler');
  console.log('App listening on port 3000');
}).listen(process.env.PORT || 3000);

