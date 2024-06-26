'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mother extends Model {
    static associate(models) {
      this.hasMany(models.Pathfinder, {
        foreignKey:'mother_key',
        as:'pathfinderMother'
      });

      this.hasOne(models.ParentAddress, {
        foreignKey:'mother_key',
        as:'motherAddress',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }

  Mother.init({
    mother_name: DataTypes.STRING(60),
    phone_number: DataTypes.CHAR(11),
    email: DataTypes.STRING(60)
  }, {
    sequelize,
    modelName: 'Mother',
    tableName: 'mothers'
    
  });
  return Mother;
};