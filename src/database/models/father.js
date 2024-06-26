'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Father extends Model {
    static associate(models) {
      this.hasMany(models.Pathfinder, {
        foreignKey: 'father_key',
        as: 'pathfinderFather'
      });

      this.hasOne(models.ParentAddress, {
        foreignKey: 'father_key',
        as: 'fatherAddress',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  
  Father.init({
    father_name: DataTypes.STRING(60),
    phone_number: DataTypes.CHAR(11),
    email: DataTypes.STRING(60)
  }, {
    sequelize,
    modelName: 'Father',
    tableName: 'fathers'
  });
  return Father;
};