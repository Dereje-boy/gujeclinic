require('dotenv').config();
const express = require('express')

const app = express();

app.get('/', (req,res)=>{
	res.send("Welcome to guje clinic");
});


app.listen(3000, ()=>console.log("The server started on port 3000"))
