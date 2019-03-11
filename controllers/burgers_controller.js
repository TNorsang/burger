
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// redirects to index or main
router.get('/', function(req, res) {
	res.redirect('/index');
});

router.get('/index', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

// add a '/burgers/insertOne' endpoint that posts the 
// burger name the user entered then as a callback it
// redirects back to the /index route
router.post('/burgers/insertOne', function(req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/index');
	});
});

// add a '/burgers/updateOne/:id' route that updates
// the status of the burger from being uneaten to eaten
// then does a callback that redirects to the /index endpoint
router.put('/burgers/updateOne/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect('/index');
	});
});

// export the router (controller) back to the server
module.exports = router;