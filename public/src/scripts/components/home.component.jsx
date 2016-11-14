import React, { Component } from 'react';

import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';

var socket = io("http://localhost:3000");;

class Home extends Component{
	constructor(){
		console.log('hey!');
		super();
		this.emit = function(){
			console.log('hello');
			socket.emit('hello',{data:'what data'});
		};
	}
	render(){
		return(
			<div>
				<h1>HEllo wow what a thing woah no way!</h1>
				<button onClick={this.emit}>Emit the thing!</button>
			</div>
			)
	}
}

export default Home