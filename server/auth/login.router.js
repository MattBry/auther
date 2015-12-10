'use strict';

var router = require('express').Router();
var User = require('../api/users/user.model');

router.post('/', function (req, res, next) {
	console.log(req.session);
	User.findOne(req.body)
	.exec()
	.then(function(foundUser){
		if (foundUser){
		res.status(200).json(foundUser);
		}
		else {
		res.status(401).json({message: "401: Unauthorized"});
	}
	})
	.then(null, next);
});

module.exports = router;