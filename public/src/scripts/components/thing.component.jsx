import React, { Component } from 'react';

class Thing extends Component{
	render(){
		return(
			<p>{this.props.thing}</p>
			)
	};
};

export default Thing;