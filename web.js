var express = require('express');
var fs = require("fs");

var app = express.createServer(express.logger());
var content = fs.readFileSync("index.html",'utf-8');
var content_msg = content.toString();
app.get('/', function(request, response) {
  response.send(content_msg);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
