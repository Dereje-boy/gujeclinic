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
		const allrecords = await sequelize.models.xxxxxxxxxx.findAll();
		if(allrecords){
			result.success = true;
			result.data = allrecords;
			return res.json(result);
		}
		result.success = true;
		result.data = null;
		result.reason = "There is no record in the database";
		return res.json(result);
	}catch(e){
		result.success = false;
		result.data = null;
		result.reason = `There is an error while querying data. Error: ${e}`;
		res.json(result);
	}	
});


//to get single record with id specified
router.get('/one/:id',async (req,res)=>{
	try{
		const addresult = await sequelize.models.xxxxxxxx.create({
			
		});
		
	}catch(e){
		result.success = false;
		result.reason = `Error while inserting single record. Error: ${e}`
		result.data = null;
		return res.json(result);
	}
});

//to add single record
router.post('/add',async (req,res)=>{
	const {data1, data2, data3} = req.body;

	//Check for the validity of the data here
	//check check
	try{
		//check the validity here to throw error if anything goes wrong
		const checkresult = xxxxxchecker(req.body);
		if(checkresult.success == false) throw new Error(checkresult.reason)
		
		const addresult = sequelize.models.xxxxx.create({
			
		});
		result.success = true;
		result.data = addresult;
		result.reason = null;
		return res.json(result);
	}catch(e){
		const errorMessage = `Error occurred while creating record. Error : ${e}`;
		result.success = false;
		result.data = null;
		result.reason = errorMessage;
		console.log(errorMessage)
		return res.json(result);
	}
	
});


module.exports = router;
