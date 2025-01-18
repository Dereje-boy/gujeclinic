function cpharmaciesmodel(sequelize, DataTypes){
	const cpharmaciesmodelv = sequelize.define(
		'cpharmaciesmodel',{
			id:{
				type: DataTypes.INTEGER,
				columnName:'prescriptionID',
				primaryKey:true,
				autoIncrement:true
			},
			patientid:{
				type:DataTypes.INTEGER,
				allowNull:false,
				columnName:"patientID",
			},
			doctorid:{
				type:DataTypes.INTEGER,
				allowNull:false,
				columnName:"doctorID"
			},
			diagnosis:{
				type:DataTypes.TEXT,
				allowNull: false,
				columnName:'DiagnosisOrCondition',
				comment:'A breif description of the patient\'s diagnosis or reason for the prescription.',
				validate:{
					len:[3,65000]
				}
			},
			date:{
				type:DataTypes.DATE,
				allowNull:false,
				columnName:"datePrescriped",
				defaultValue:DataTypes.Now,
				comment:"The date the prescription was created"
			},
			medicationname:{
				type: DataTypes.STRING,
				columnName:"medicationName",
				allowNull:false,
				validate:{
					len:[2,255]
				},
				column:'The name of the drug prescribed'
			},
			dosage:{
				type: DataTypes.INTEGER,
				allowNull:false,
				validate:{
					min:0
				},
				comment:'The prescribed dose eg: 500mg'
			},
			routeofadministration:{
				type:DataTypes.STRING,
				allowNull: true,
				defaultValue:"",
				comment:"How the drug should be taken. eg: oral, intravenous, topical"
			},
			frequency:{
				type: DataTypes.STRING,
				allowNull:false,
				comment: "How often the medication should be taken. eg: once a day, twice daily"
			},
			duration:{
				type: DataTypes.STRING,
				allowNull: false,
				comment :'The duration the for which the medication should be taken eg: 7 days'
			},
			quantity:{
				type:DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 1,
				validate:{
					min:1,
					max:100
				},
				comment:'Total amount of medication to be dispensed. default: 1'
			},
			instructionforuse:{
				type:DataTypes.TEXT,
				allowNull: true,
				defaultValue:'',
				columnName:'instructionForUse',
				comment: "Any specific instructions for taking the medication. eg: take after meal"
			},
			specialwarnings:{
				type:DataTypes.STRING,
				allowNull: true,
				defaultValue:'',
				columnName:'specialWarnings',
				comment:"Warnings or precautions. eg: avoid alcohol while taking this medicine"
			},
			substitutionallowed:{
				type:DataTypes.STRING,
				allowNull:true,
				defaultValue:'',
				columnName:"substitutionAllowed",
				comment:'Substitution drug with an equivalent generic drug'
			},
			pharmacistid:{
				type:DataTypes.INTEGER,
				allowNull: true,
				columnName:'pharmacistID',
				comment:'ID of the pharmacist who dispensed the medication'
			},
			dispenseddate:{
				type: DataTypes.DATE,
				allowNull: true,
				columnName:'dispensedDate',
				comment:'The date the medication was dispensed by the pharmacist'
			},
			pharmacynote:{
				type: DataTypes.TEXT,
				allowNull: true,
				columnName:'pharmacyNote',
				comment:'Additional note from the pharmacist if any.'
			}
			
		},
		{
			tableName:'cpharmacies'
		}
	);

	return cpharmaciesmodelv;
}

module.exports = cpharmaciesmodel;
