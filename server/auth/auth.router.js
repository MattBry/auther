'use strict';

var router = require('express').Router();

router.use('/login', require('./login.router'));

router.use('/signup', require('./signup.router'));

router.use('/logout', require('./logout.router'));

module.exports = router;