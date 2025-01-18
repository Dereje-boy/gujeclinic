require('dotenv').config();
const express = require('express')

//index of models
const sequelize = require('./models/index.js')

const app = express();

(async ()=>{
	try{
		await sequelize.authenticate();
		console.log("DB connected successfully")

		await sequelize.sync({alter:true});
		console.log('DB synced success')

		//console.log('List of my models in sequelize')
		//for(let m in sequelize.models){
		//	console.log(sequelize.models[m].getTableName());
		//	console.log(await sequelize.models[m].describe());
		//}

		

	/** Inserting into croles table
		console.log("Creating new admin role")
		const admin = await sequelize.models.crolesmodel.create({rolename:'Admin'});
		console.log("The inserted admin is this : " + JSON.stringify(admin));
	**/

	//inserting into cusers table
	/**
		console.log("Inserting new user")
		const dere = await sequelize.models.cusersmodel.create({firstname:'Dereje', 
			lastname:"Gezahegn", phoneNumber:"0922982193", email:"Dere@gmail.com", 
			password:"dere09",role:"admin"})
		console.log("The inserted user is this : " + JSON.stringify(dere));
	**/

	//inserting new patient
	//await insertNewPatient();

	//inserting new test
	//await insertNewTest();

	}catch(error){
		console.error("Error while authentication ", error);
	}})();

app.get('/', (req,res)=>{
	res.send("Welcome to guje clinic");
});


app.listen(3000, ()=>console.log("The server started on port 3000"))


async function insertNewTest(){
	try{
		const test = await sequelize.models.ctestsmodel.create({
			price:200.55,
			testname:'Hematocrit (Hct)',
			testgroup:'Hematology Test',
		})
		console.log('The inserted test is : ' + JSON.stringify(test));
	}catch(e){
		console.error("Error while new test registration ", e)
	}
}


async function insertNewPatient(){
	try{
		
		const patient = await sequelize.models.cpatients.create({
			firstname:'abe',
			lastname:'kabe',
			age:20,
			gender:'male'
		})
		console.log('The inserted patient is ' + JSON.stringify(patient))
	}catch(e){
		console.error('Error while new patient insertion ', e);
	}
}
