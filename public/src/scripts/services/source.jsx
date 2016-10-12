class Source {
	constructor(source){
		this.source = source;
	}
	getThings(){
		var that = this;
		return new Promise(function(resolve,reject){
			resolve(that.source);
		});
		// return this.source;
	}
}

export default Source;