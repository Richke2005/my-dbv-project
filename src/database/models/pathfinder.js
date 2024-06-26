'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pathfinder extends Model {
    static associate(models) {
      //I have to create it on migrates manually
      //this FK belongs to Mother's model
      this.belongsTo(models.Mother, {
        foreignKey: 'mother_key',
        as: 'mother'
      });
      //this FK belongs to father's model
      this.belongsTo(models.Father, {
        foreignKey: 'father_key',
        as: 'father'
      });
    }
  }

  Pathfinder.init({
    pathfinder_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.CHAR(11),
    age: DataTypes.DATEONLY,
    talents: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Pathfinder',
    tableName: 'pathfinders'
  });
  return Pathfinder;
};