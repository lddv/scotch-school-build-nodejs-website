// import the http module
var http = require('http');

// handle sending requests and returning responses
function handleRequests(req, res) {
  // return string
  res.end('Hello World!');
}

// create the server
var server = http.createServer(handleRequests);

// start server and listen on port X
server.listen(8080, function() {
  console.log('Listening on port 8080');
});
