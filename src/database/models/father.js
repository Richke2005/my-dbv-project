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
    phone_number: {
      type: DataTypes.CHAR(11),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(60),
      validate: {
        isEmail: {
          args: true,
          msg: "Invalid email address"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Father',
    tableName: 'fathers'
  });
  return Father;
};