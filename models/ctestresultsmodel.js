function ctestresultsmodel(sequelize, DataTypes){
	const ctestresultsmodelv = sequelize.define(
		'ctestresultsmodel',{
			id:{
				type: DataTypes.INTEGER,
				primaryKey:true,
				autoIncrement: true
			},
			clabformsid:{
				type: DataTypes.INTEGER,
				allowNull: false,
				columnName:'labID',
				comment:"This column is required to hold the reference of the lab the doctor requests were registered on.",
				references:{
					model: 'clabforms',
					key:'id'
				}
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
			additionalnote:{
				type:DataTypes.TEXT,
				allowNull: false,
				defaultValue: '',
				columnName: "additionalNote"
			}
		},{
			tableName:'ctestresults'
		}
	);

	ctestresultsmodelv.associate = (models)=>{
		ctestresultsmodel.belognsTo(models.clabformsmodel, {
			foreignKey:'clabformsid',
			as:'clabforms' 
		})
	}

	return ctestresultsmodelv;
}

module.exports = ctestresultsmodel;
