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

	/**
		console.log("Creating new admin role")
		const admin = await sequelize.models.crolesmodel.create({rolename:'Admin'});
		console.log("The inserted admin is this : " + JSON.stringify(admin));
	**/
	}catch(error){
		console.error("Error while authentication ", error);
	}})();

app.get('/', (req,res)=>{
	res.send("Welcome to guje clinic");
});


app.listen(3000, ()=>console.log("The server started on port 3000"))
