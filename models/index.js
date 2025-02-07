const crolesmodel = require('./crolesmodel.js')
const cusersmodel = require('./cusersmodel.js')
const cpatientsmodel = require('./cpatientsmodel.js')
const clabformsmodel = require('./clabformsmodel.js')
const ctestsmodel = require('./ctestsmodel.js')
const cpharmaciesmodel = require('./cpharmaciesmodel.js')
const ctestresultsmodel = require('./ctestresultsmodel.js')

const {Sequelize, DataTypes} = require('sequelize');

const development = true;

const sequelize = !development ?  new Sequelize(
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
) : new Sequelize(
	process.env.DB_NAME,'root', '',{
		logging: false,
		dialect: 'mysql',
		dialectOptions:{
			connectTimeout: 6000
		}
	}
);

const crolesv = crolesmodel(sequelize, DataTypes);
const cusersv = cusersmodel(sequelize, DataTypes);
const cpatientsv = cpatientsmodel(sequelize, DataTypes);
const clabformsv = clabformsmodel(sequelize,DataTypes);
const ctestresultsv = ctestresultsmodel(sequelize,DataTypes);
const ctestsv = ctestsmodel(sequelize, DataTypes);
const cpharmaciesv = cpharmaciesmodel(sequelize, DataTypes);


//1. The association between cusers and croles
cusersv.belongsToMany(
	crolesv,
	{
		through:'cusers_croles',	
		foreignKey: 'cusersid',
		otherKey: 'crolesid'
	}
)
crolesv.belongsToMany(
	cusersv,
	{
		through:'cusers_croles',
		foreignKey:'crolesid',
		otherKey:'cusersid'
	}
)

//2. The association betweem clabforms and cpatients
cpatientsv.hasMany(
	clabformsv,{
		foreignKey: 'cpatientsid',
		allowNull: false,
		onDelete: 'NO ACTION',
		onUpdate: 'NO ACTION'
	}
)

clabformsv.belongsTo(
	cpatientsv,{
		foreignKey: 'cpatientsid',
	}
)

// 3. The relation between cusers and clabforms
cusersv.hasMany(
	clabformsv,{
		foreignKey:{
			name:'doctorid',
			allowNull: false
		}
	}
)
clabformsv.belongsTo(
	cusersv,{
		foreignKey: 'doctorid',
	}
)

//The association between clabforms and ctestresults
clabformsv.hasOne(
	ctestresultsv,{
		foreignKey:'clabformsid',
		allowNull: true
	}
)
ctestresultsv.belongsTo(
	clabformsv,{
		foreignKey: 'clabformsid',
	}
)

//4. The association between ctests and clabforms
ctestsv.hasMany(
	clabformsv,{
		foreignKey:'clabformsid',
		allowNull: false
	}
)

clabformsv.belongsTo(
	ctestsv,{
		foreignKey:'clabformsid',
	}
)

/**
clabformsv.hasOne(ctestresultsv,{
	foriegnKey:'clabformsid'
})

ctestresultsv.belongsTo(clabformsv, {
	foreignKey:'clabformsid'
})
**/

module.exports = sequelize;
