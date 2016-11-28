import React, { Component } from 'react';

import { SocketProvider } from 'socket.io-react';
import Note from './note.component.jsx';
import io from 'socket.io-client';

var socket = io("http://localhost:3000");

class Home extends Component{
	constructor(){
		super();
		this.message = '';
		this.boards = [
			{
				name:'start',
				postits:[],
				newNotes:0
			},
			{
				name:'continue',
				postits:[],
				newNotes:0
			},
			{
				name:'finish',
				postits:[],
				newNotes:0
			}];
		this.currentBoard = 0;
		this.emit = function(e){
			e.preventDefault();
			var message = this.message;
			var board = this.currentBoard;
			socket.emit('hello',{message:message,board:board});
			document.getElementsByTagName('input')[0].value = '';
			this.message = '';
		}.bind(this);
		this.updateMessage = function(e){
			this.message = e.nativeEvent.target.value
		}.bind(this);
		this.addNote = function(data){
			console.log('what',data);
			var postits = this.boards[data.board].postits;
			postits.push(data.message);
			if(data.board!==this.currentBoard) this.boards[data.board].newNotes ++;
			this.forceUpdate();
		}.bind(this);
	}
	componentDidMount(){
		var that = this;
		socket.on('new hello',that.addNote);
	}
	render(){
		console.log(this.currentBoard);
		var notes = this.boards[this.currentBoard].postits.map((post,i)=>{
			return <Note key={i} post={post}></Note>
		});
		// var that = this;
		var buttons = this.boards.map((board,i)=>{
			var changeBoard = function(){
				this.currentBoard = i;
				this.boards[i].newNotes = 0;
				this.forceUpdate();
			}.bind(this);
			return <button key={i} onClick={changeBoard}>{board.name} {board.newNotes?board.newNotes:''}</button>
		});
		return(
			<div>
				<form className="board" onSubmit={this.emit}>
					<input onInput={this.updateMessage}></input>
					<button className="">Post a note!</button>
				</form>
				<div>
					{buttons}
				</div>
				{notes}
			</div>
			
			)
	}
}

export default Home