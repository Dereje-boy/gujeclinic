function cpatientsmodel(sequelize, DataTypes){
	const cpatientsmodelv = sequelize.define(
		'cpatientsmodel',{
			id : {
				type: DataTypes.INTEGER,
				primaryKey:true,
				autoIncrement: true
			},
			firstname:{
				type:DataTypes.STRING,
				allowNull:false,
				validate:{
					isAlpha:true,
					len:[3,25],
				}
			},
			lastname:{
				type:DataTypes.STRING,
				allowNull:false,
				validate:{
					isAlpha:true,
					len:[3,25],
				}
			},
			gender:{
				type:DataTypes.STRING,
				defaultValue:'Not mentioned',
				validate:{
					isIn:['male','female']
				}
				
			},
			age:{
				type:DataTypes.INTEGER,
				allowNull:false,
				validate:{
					isNumeric:true,
					min:0,
					max:150
				}
			},
			month:{
				type:DataTypes.INTEGER,
				defaultValue:0,
				allowNull:false,
				validate:{
					isNumeric:true,
					min:0,
					max:13
				}
			},
			dateofbirth:{
				type:DataTypes.DATE,
				allowNull:true,
				
			},
			phonenumber:{
				type:DataTypes.STRING,
				allowNull:true,
				validate:{
					len:[9,15]
				}
			},
			address:{
				type:DataTypes.STRING,
				allowNull:true,
			},
			lastseen:{
				type:DataTypes.DATE,
				allowNull:true
			},
			labform:{
				type:DataTypes.INTEGER,
				allowNull:true,
				validate:{
					min:0,
				}
			},
			
		},{
			tableName : 'cpatients'
		}
	)

	return cpatientsmodelv;
}

module.exports = cpatientsmodel
