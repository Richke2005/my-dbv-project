'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('pathfinders', [
      {
        pathfinder_name: 'Miguel',
        email: 'Miguel@gmail.com',
        phone_number: '11947917364',
        age: new Date(),
        talents: 0.0,
        mother_key: 1,
        father_key: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pathfinder_name: 'Stella',
        email: 'stella@gmail.com',
        phone_number: '11975342678',
        age: new Date(),
        talents: 0.0,
        mother_key: 2,
        father_key: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('pathfinders', null, {});

  }
};
