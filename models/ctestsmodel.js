function ctestsmodel(sequelize, DataTypes){
	const ctestsmodelv = sequelize.define(
		'ctestsmodel',{
			id:{
				type:DataTypes.INTEGER,
				primaryKey:true,
				autoIncrement:true
			},
			price:{
				type:DataTypes.FLOAT(5,2),
				defaultValue:0.00,
				validate:{
					min:0,
					max:99999
				}
			},
			testname:{
				type:DataTypes.STRING,
				unique:true,
				columnName:'testName',
				validate:{
					len:[2,255]
				}
			},
			testgroup:{
				type:DataTypes.STRING,
				columnName:'testGroup',
				defaultValue:'ungrouped',
				validate:{
					len:[2,255],
				}
			},
			description:{
				type:DataTypes.TEXT,
				allowNull:false,
				defaultValue:'',
			},
			comment:{
				type: DataTypes.TEXT,
				allowNull:false,
				defaultValue:''
			}
		},{
			tableName:'ctests'
		}
	);

	return ctestsmodelv;
}

module.exports = ctestsmodel;
