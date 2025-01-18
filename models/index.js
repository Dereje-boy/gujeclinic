const crolesmodel = require('./crolesmodel.js')
const cusersmodel = require('./cusersmodel.js')
const cpatientsmodel = require('./cpatientsmodel.js')
const clabformsmodel = require('./clabformsmodel.js')
const ctestsmodel = require('./ctestsmodel.js')
const cpharmaciesmodel = require('./cpharmaciesmodel.js')

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

const croles = crolesmodel(sequelize, DataTypes);
const cusers = cusersmodel(sequelize, DataTypes);
const cpatients = cpatientsmodel(sequelize, DataTypes);
const clabforms = clabformsmodel(sequelize,DataTypes);
const ctests = ctestsmodel(sequelize, DataTypes);
const cpharmacies = cpharmaciesmodel(sequelize, DataTypes);

module.exports = sequelize;
