import React, { Component } from 'react';

class Note extends Component{
	render(){
		return(
			<p>{this.props.post}</p>
			)
	};
};

export default Note;