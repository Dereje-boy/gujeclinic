const express = require('express');
const router = express.Router();

//sequelize importing
const sequelize = require('../models/index.js');

//the return structure which all routes will follow
const result = {
       success: false,
       data: [],
       reason: 'not fetched yet',
       otherdata:{
        }
    }


//for fetching all of the records
router.get('/all',async (req,res)=>{
	try{
		const roles = await sequelize.models.crolesmodel.findAll();
		if(roles){
			const rolesjson = JSON.stringify(roles);
			result.success = true;
			result.data = roles;

			return res.send(`all roles result : ${JSON.stringify(result)}`)
		}
		result.success = true;
		result.data = [];
		result.reason = 'no roles in the database';
		return res.send(`result: ${result}`)
	}catch(e){
		result.success = false;
		result.reason = e;
		return res.send(`Error while loading, result: ${result}`);
	}
});


//to get single record with id specified
router.get('/one/:id',async (req,res)=>{
	try{
		const role = await sequelize.models.crolesmodel.findByPk(req.params.id);
		if(role){
			const rolejson = JSON.stringify(role);

			result.success = true;
			result.data = rolejson;
			return res.json(result);
		}
		
		//there is no record
		result.success = true;
		result.data = [];
		result.reason = 'There is no record in the database';
		return res.json(result);
	}catch(e){
		result.success = false;
		result.reason = `Error occured while fetching single record: ${e}`;
		return res.json(result)
	}
});

//to add single record
router.post('/add',async (req,res)=>{
	
});


module.exports = router;
