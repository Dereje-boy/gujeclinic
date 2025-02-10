const express = require('express');
const router = express.Router();

//sequelize importing
const sequelize = require('../models/index.js');

const result = {
	      success: false,
    	  data: [],
      	  reason: 'not fetched yet',
      	  otherdata:{}
       }

//for fetching all of the records
router.get('/all',async (req,res)=>{
	try{
		const allusers = await sequelize.models.cusersmodel.findAll();
		const aujson = JSON.stringify(allusers);
		if(allusers){
			console.log(`All users in the db are \n${aujson}`)

			result.success = true;
			result.data = aujson;
			
			return res.send(`result ${JSON.stringify(result)}`)
		}

		result.success = true;
		result.data = aujson

		return res.send(`no user in the db, result:${result}`);
	}catch(e){
		console.log('Unable to fetch all users due to \n'+ e);

		result.success = false;
		result.reason = e;
		
		return res.send(`Unable to fetch all users due to \nresult: ${result}`+ e);
	}
});


//to get single record with id specified
router.get('/one/:id',(req,res)=>{
	
});

//to add single record
router.post('/add',(req,res)=>{
	
});


module.exports = router;
