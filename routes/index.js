var express = require('express');
var router = express.Router();
var request = require('request-promise');

/* GET home page. */
router.get('/weather', function(req, res, next) {
console.log(req.query);
var options = {
	uri: 'http://api.openweathermap.org/data/2.5/weather',
	qs: req.query,
	json: true
};
request(options)
	.then(function(data){
		console.log(data);
		res.status(200).json(data);
	}).catch(function(err){
		res.sendStatus(500);
	});
});



module.exports = router;
