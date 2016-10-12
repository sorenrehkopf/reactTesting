import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
	render(){
		return(
			<div>
				<nav>
					<Link to="/"><button>Home</button></Link>
					<Link to="/about"><button>About</button></Link>
					<Link to="/things"><button>Things</button></Link>
				</nav>
				<div id="app">
					{this.props.children}
				</div>
			</div>
		)
	};
};

export default Main;