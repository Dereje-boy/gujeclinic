function cusersmodel(sequelize, DataTypes){
	const cusersmodelv = sequelize.define(
		'cusersmodel',{
			id:{
				type: DataTypes.INTEGER,
				primaryKey:true,
				autoIncrement:true,
			},
			firstname:{
				type:DataTypes.STRING,
				allowNull: false,
				validate:{
					len:[3,25],
					isAlpha:true,
				}
			},
			lastname:{
				type:DataTypes.STRING,
				allowNull: false,
				validate:{
					len:[3,25],
					isAlpha:true,
				}
			},
			phoneNumber:{
				type:DataTypes.STRING,
				allowNull: true,
			},
			email:{
				type:DataTypes.STRING,
				allowNull:true,
				unique: true,
				validate:{
					isEmail:true,
				}
			},
			password:{
				type:DataTypes.STRING,
				allowNull: false,
				validate:{
					len:[6,20]
				}
			},
		},{
			tableName:'cusers'
		}
	)
	return cusersmodelv;
}

module.exports = cusersmodel;
