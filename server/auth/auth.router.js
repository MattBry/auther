'use strict';

var router = require('express').Router();

router.use('/login', require('./login.router'));

router.use('/signup', require('./signup.router'));

module.exports = router;