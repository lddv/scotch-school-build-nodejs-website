// // import the http module
// var http = require('http');
//
// // handle receiving requests and returning responses
// function handleRequests(req, res) {
//   // return string
//   res.end('Hello World!');
// }
//
// // create the server
// var server = http.createServer(handleRequests);
//
// // start server and listen on port X
// server.listen(8089, function() {
//   console.log('Listening on port 8089');
// });


/////////////////// EXPRESS ///////////////////

var express = require('express');
var app = express();
var port = 8089;

// start the server
app.listen(port, function() {
  console.log('app started');
});

// route our app
app.get('/', function(req, res) {
  res.send('Hello World!');
});
