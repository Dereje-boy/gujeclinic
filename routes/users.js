const express = require('express');
const router = express.Router();

//sequelize importing
const sequelize = require('../models/index.js');

//for fetching all of the records
router.get('/all',async (req,res)=>{
	try{
		const allusers = await sequelize.models.cusersmodel.findAll();
		if(allusers){
			const aujson = JSON.stringify(allusers);
			console.log(`All users in the db are \n${aujson}`)
			return res.send(`All users in the db are \n${aujson}`)
		}

		res.send('no user in the db');
	}catch(e){
		console.log('Unable to fetch all users due to \n'+ e);
		res.send('Unable to fetch all users due to \n'+ e);
	}
});


//to get single record with id specified
router.get('/one/:id',(req,res)=>{
	
});

//to add single record
router.post('/add',(req,res)=>{
	
});


module.exports = router;
