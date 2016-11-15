var hellos = [
	
]

var socket = function(io){

	io.on('connection',function(socket){
		console.log('connected');
		socket.on('hello',function(e){
			console.log('hello received!',e);
			hellos.push(e.message);
			socket.emit('new hello',{message:e.message});
		});
	});
};

module.exports = socket;