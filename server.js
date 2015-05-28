var express = require('express');
var app = express();

var http = require('http').Server(app);

// Define public static assets directory
app.use('/public', express.static(__dirname + '/public'));

// Default route send client app
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/html/index.html');
});

http.listen(3000, function(){
  console.log('App server listening on *:3000');
});