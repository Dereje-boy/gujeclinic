const express = require('express');
const router = express.Router();

//labforms route
const labforms = require('./labforms.js');
//users route
const usersroute = require('./users.js');

router.use('/labforms', labforms);
router.use('/users', usersroute);

module.exports = router;
