const express = require('express');
const router = express.Router();

//labforms route
const labforms = require('./labforms.js');
//users route
const usersroute = require('./users.js');
//roles route
const rolesroute = require('./roles.js')

router.use('/labforms', labforms);
router.use('/users', usersroute);
router.use('/roles', rolesroute)

module.exports = router;
