function crolesmodel(sequelize, DataTypes){
	const crolesmodelv = sequelize.define(
		'crolesmodel',{
			id : {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
				columnName:"id",
				comment:"This field or column is used to hold the id of different roles",
				unique: true,
			},
			rolename:{
				type: DataTypes.STRING,
				allowNull: false,
				columnName: "rolename",
				unique: true,
				validate:{
					len: [3,25],
				}
			}
		},
		{
			tableName:'croles',
		}
	)
	return crolesmodelv;
}

module.exports = crolesmodel
