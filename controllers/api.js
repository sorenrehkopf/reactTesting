const express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send(data);
});

var data = {
	things:[
		'thing1',
		'thing2',
		'thing3',
		'thing4'
	]
}

module.exports = router;