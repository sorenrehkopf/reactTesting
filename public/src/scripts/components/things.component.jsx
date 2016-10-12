import React, { Component } from 'react';
import Source from '../services/source.jsx';

// import Thing from 'thing.component.jsx';

var api = new Source([
			'one thing',
			'two thing',
			'three thing'
		]);

class Things extends Component{
	constructor(){
		super();
		this.things = ['whet','eha'];
		this.thingEls = [];
		this.update = function(obj){
			this.setState(obj)
		}.bind(this);
	}
	componentWillMount(){
		var that = this;
		api.getThings().then(things=>{
			let thingEls = this.thingEls;
			things.forEach((thing,i)=>{
				thingEls.push(<p key={i}>{thing}</p>)
			});	
			that.update({
				thingEls:thingEls
			});
		});
	}
	render(){
		console.log('rendering');
		return(
			<div>
			{this.thingEls}
				<div>
					<h1 onClick={this.click}>This is the things page!</h1>
				</div>
				<div>
					{this.thingEls}
				</div>
			</div>
			)
	}
};

export default Things;	