const express = require('express');
const router = express.Router();

//sequelize importing
const sequelize = require('../models/index.js');

//for fetching all of the records
router.get('/all',(req,res)=>{
	console.log('/api/labforms/all get route is visited')
	res.send('you are at /api/labforms/all route')
});


//to get single record with id specified
router.get('/one/:id',(req,res)=>{
	console.log(`your id provided is ${req.params.id}`)
	res.send(`your id provided is ${req.params.id}`)
});

//to add single record
router.post('/add',(req,res)=>{
	
});


module.exports = router;
