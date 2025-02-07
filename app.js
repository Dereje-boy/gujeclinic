require('dotenv').config();
const express = require('express')

//all routes
const miniroutes = require('./routes/index.js');

//index of models
const sequelize = require('./models/index.js')

const app = express();

app.use('/api/', miniroutes);

(async ()=>{
	try{
		await sequelize.authenticate();
		console.log("DB connected successfully")

		 await sequelize.sync({alter:true});
		 console.log('DB synced success')

		//console.log('List of my models in sequelize')
		// for(let m in sequelize.models){
			// console.log(sequelize.models[m]);
		// console.log(sequelize.models[m].getTableName());
		//	console.log(await sequelize.models[m].describe());
		// }

	/** Inserting into croles table
		console.log("Creating new admin role")
		const allroles = await sequelize.models.crolesmodel.bulkCreate([
			{rolename:'admin'},
			{rolename:'doctor'},
			{rolename:'reception'},
			{rolename:'pharmacist'},
			{rolename:'labtechnician'}
		]);
		console.log("The inserted admin is this : " + JSON.stringify(allroles));
	**/

	//inserting into cusers table
/**
		console.log("Inserting new user")
		const dere = await sequelize.models.cusersmodel.create({firstname:'Dereje', 
			lastname:"Gezahegn", phoneNumber:"0922982138", email:"Dere@gmail.com", 
			password:"dere09",role:"admin"})
		console.log("The inserted user is this : " + JSON.stringify(dere));
**/

	//fetching user with id =1
	// const user1 = await sequelize.models.cusersmodel.findByPk(1);
	// console.log("the user with id ==1 is \n " + JSON.stringify(user1));

	//assigning

	//inserting new patient
	// await insertNewPatient();

	//fetching patient with id ==1
//	console.log('Patient with id == 1 \n' + JSON.stringify(await sequelize.models.cpatientsmodel.findByPk(1)))

	//inserting new test
	// await insertNewTest();

	//fetching all tests
	// console.log('All tests : \n' + JSON.stringify(await sequelize.models.ctestsmodel.findAll()));

	//inserting new clab request form and its testresult
	//const inserted = await insertNewLabForm();
	//const newtestresult = await insertNewTestResult(inserted.id);

	//fetching test result with its lab request
	const result = await sequelize.models.clabformsmodel.findOne({
		where : {
			id: 2
		},
		include:{
			model: sequelize.models.ctestresultsmodel
		}
	});

	console.log('The inserted test result with it\'s lab request form:\n', 
		JSON.stringify(result))

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
		
		const patient = await sequelize.models.cpatientsmodel.create({
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

async function insertNewLabForm(){
	try{
		console.log('Inserting new lab request form')
		const inserted = await sequelize.models.clabformsmodel.create({
			patientid:2,
			doctorid: 1,
			testid: 2
		});
		console.log("The inserted new lab request form is " + JSON.stringify(inserted))
		return inserted;
	}catch(e){
		console.error('Error while inserting new lab request form ', e)
		
	}
}

async function insertNewTestResult(labid){
	try{
		const inserted = await sequelize.models.ctestresultsmodel.create({
			clabformsid: labid,
			testresult: "The lab test was made and the result is positive",
			labtechnicianid: 1,
			additionalNote: "This is the additional note on the test above and written by the lab technician with the id of 1"
		});
		console.log('The inserted testresult is ' + JSON.stringify(inserted));
	}catch(e){
		console.error('Error while inserting new test result', e)
	}
}
