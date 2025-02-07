const express = require('express');
const router = express.Router();

//sequelize importing
const sequelize = require('../models/index.js');

//for fetching all of the records
router.get('/all',(req,res)=>{
	
});


//to get single record with id specified
router.get('/one/:id',(req,res)=>{
	
});

//to add single record
router.post('/add',(req,res)=>{
	
});


module.exports = router;
