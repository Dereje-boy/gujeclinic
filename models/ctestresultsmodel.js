function ctestresults(sequelize, DataTypes){
	const ctestresultsv = sequelize.define(
		'ctestresultsmodel',{
			id:{
				type: DataTypes.INTEGER,
				primaryKey:true,
				autoIncrement: true
			},
			labid:{
				type: DataTypes.INTEGER,
				allowNull: false,
				columnName:'labID',
				comment:"This column is required to hold the reference of the lab the doctor requests were registered on."
			},
			testresult: {
				type: DataTypes.TEXT,
				columnName:'testResult',
				allowNull: false,
				comment:"This column holds the result of the test got by the lab technician and also filled by the lab technician"
				
			},
			labtechnicianid:{
				type: DataTypes.INTEGER,
				columnName:"labTechnicianID",
				allowNull: false,
				validate:{
					min: 1
				},
				comment:"This column is required to hold the lab technician id for the sake of knowing who make the laboratory test"
			},
			labnote:{
				type:DataTypes.TEXT,
				allowNull: false,
				defaultValue: ''
			}
		},{
			tableName:'ctestresults'
		}
	);

	return ctestresultsv;
}

module.exports = ctestresults;
