"use strict"

// require the dependencies
var express = require('express');

// declare the app
var app = express();

// TODO: configure the app

// add the routes
app.get('/', function (req, res) {
  res.send('Hello World!');
})

// launch the server
var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

})