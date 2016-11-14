var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

require(__dirname+'/controllers/socket.js')(io);

app.use(express.static('public'));

var apicontroller = require(__dirname+'/controllers/api.js');
app.use('/api',apicontroller);

app.get('*',function(req,res){
	res.sendFile(__dirname+'/public/index.html');
});

server.listen(3000,function(){
	console.log('listening on port 3000');
});