'use strict';

var router = require('express').Router();
var User = require('../api/users/user.model');

router.post('/', function (req, res, next) {
	console.log(req.session);
	User.create(req.body, function(err, user){
	res.status(201)
	res.send("created the resource")
	});
});

module.exports = router;
