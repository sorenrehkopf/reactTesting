import React, { Component } from 'react';
import { render } from 'react-dom';

class Home extends Component{
	render(){
		return(
			<div>
				<h1>HEllo wow what a thing woah no way!</h1>
			</div>
			)
	}
}

render(<Home />, document.getElementById('app'));