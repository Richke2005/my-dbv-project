'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fathers', [
      {
      father_name: 'John Doe',
      phone_number: '11937462533',
      email: 'john@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        father_name: 'Levi Reis',
        phone_number: '11974536273',
        email: 'levi@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fathers', null, {});
  }
};
