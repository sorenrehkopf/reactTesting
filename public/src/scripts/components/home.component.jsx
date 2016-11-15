import React, { Component } from 'react';

import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';

var socket = io("http://localhost:3000");

class Home extends Component{
	constructor(){
		console.log('hey!!!!!!!');
		super();
		this.message = '';
		this.postits = [];
		this.emit = function(){
			var message = this.message;
			socket.emit('hello',{message:message});
			document.querySelector('input').value = '';
			this.message = '';
		}.bind(this);
		this.updateMessage = function(e){
			this.message = e.nativeEvent.target.value
		}.bind(this);
		this.updateThings = function(data){
			console.log(data);
			var postits = this.postits;
			postits.push(<p key={postits.length}>{data.message}</p>);
			this.setState({postits:postits});
		}.bind(this);
	}
	componentDidMount(){
		var that = this;
		socket.on('new hello',that.updateThings);
	}
	render(){
		return(
			<div>
				<h1>HEllo wow what a thing woah no way!</h1>
				<input onInput={this.updateMessage}></input>
				<button onClick={this.emit}>Emit the thing!</button>
				{this.postits}
			</div>
			)
	}
}

export default Home