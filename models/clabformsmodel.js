function clabformmodel(sequelize, DataTypes){
	const clabformmodelv = sequelize.define(
		'clabformsmodel',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey:true,
				autoIncrement:true
			},
			patientid:{
				type:DataTypes.INTEGER,
				allowNull:false,
				columnName:'patientID',
				validate:{
					min:0
				}
			},
			doctorid:{
				type:DataTypes.INTEGER,
				allowNull:false,
				columnName:'doctorID',
				validate:{
					min:0
				}
			},
			testid:{
				type:DataTypes.INTEGER,
				allowNull:false,
				columnName:'testID',
				validate:{
					min:0
				}
			},
			daterequested:{
				type:DataTypes.DATE,
				allowNull:false,
				columnName:'dateRequested',
				defaultValue:DataTypes.NOW
			},
			priority:{
				type:DataTypes.STRING,
				defaultValue:'normal',
				validate:{
					isIn:['normal','urgent','STAT']
				}
			}
		},{
			tableName:'clabforms'
		}
	);

	return clabformmodel;
}

module.exports = clabformmodel
