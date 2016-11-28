var hellos = [
	
]

var socket = function(io){

	io.on('connection',function(socket){
		console.log('connected');
		socket.on('hello',function(e){
			console.log('hello received!',e);
			hellos.push(e.message);
			io.emit('new hello',e);
		});
	});
};

module.exports = socket;