'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('parent_addresses', {
      mother_key: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model:'mothers',
          key:'id'
        }
      },
      father_key: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      references:{
        model:'fathers',
        key:'id'
      }
      },
      street: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.CHAR(10)
      },
      cep: {
        type: Sequelize.CHAR(8)
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
    await queryInterface.dropTable('parent_addresses');
  }
};