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
				comment: "This column is required to hold the reference of the test the doctor wants to know",
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
			},
			additionalnote:{
				type: DataTypes.TEXT,
				allowNull:false,
				defaultValue:""
			}
		},{
			tableName:'clabforms'
		}
	);

	return clabformmodelv;
}

module.exports = clabformmodel
