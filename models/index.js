const crolesmodel = require('./crolesmodel.js')
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		logging: false,
		dialect: 'mysql',
		dialectOptions:{
			connectTimeout: 60000
		}	
	}
)

crolesmodel(sequelize, DataTypes);

module.exports = sequelize;
