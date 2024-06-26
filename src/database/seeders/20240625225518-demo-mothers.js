'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('mothers', [
        {
        mother_name: 'Milena',
        phone_number: '11974637846',
        email: 'milena@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          mother_name: 'Isabella',
          phone_number: '11975342678',
          email: 'isabella@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
