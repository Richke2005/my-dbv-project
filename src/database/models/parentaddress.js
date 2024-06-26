'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ParentAddress extends Model {
    static associate(models) {
      //this FK belongs to mother model
      this.belongsTo(models.Mother,{
        foreignKey:'mother_key'
      });
       //this FK belongs to father model
      this.belongsTo(models.Father, {
        foreignKey: 'father_key'
      });
    }
  }

  ParentAddress.init({
    street: DataTypes.STRING,
    number: DataTypes.CHAR(10),
    cep: DataTypes.CHAR(8)
  }, {
    sequelize,
    modelName: 'ParentAddress',
    tableName: 'parent_addresses'
  });
  return ParentAddress;
};