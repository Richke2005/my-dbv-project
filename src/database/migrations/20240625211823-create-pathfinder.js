'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pathfinders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pathfinder_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.CHAR(11)
      },
      age: {
        type: Sequelize.DATEONLY
      },
      talents: {
        type: Sequelize.FLOAT
      },
      mother_key: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'mothers',
          key:'id'
        }
      },
      father_key: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'fathers',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pathfinders');
  }
};