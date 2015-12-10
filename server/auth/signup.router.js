'use strict';

var router = require('express').Router();
var User = require('../api/users/user.model');

router.post('/', function (req, res, next) {
	console.log(req.body);
	User.create(req.body, function(err, user){
	res.status(201)
	res.send("created the resource")
	});
});

module.exports = router;
// router.post('/', function (req, res, next) {
// 	console.log(req.body);
// 	User.findOne(req.body)
// 	.exec()
// 	.then(function(foundUser){
// 		console.log(foundUser);
// 		if (foundUser){
// 		res.status(200).json(foundUser);
// 		}
// 		else {
// 		res.status(401).json({message: "401: Unauthorized"});
// 	}
// 	})
// 	.then(null, next);
// });