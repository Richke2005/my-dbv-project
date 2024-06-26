'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('parent_addresses', [
        {
          mother_key: 1,
          father_key: 1,
          street: 'Rua ines de souza',
          number: '123',
          cep: '12345678',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          mother_key: 2,
          father_key: 2,
          street: 'Rua ines de souza',
          number: '125',
          cep: '87654321',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});

  },

  async down (queryInterface, Sequelize) { 
    await queryInterface.bulkDelete('parent_addresses', null, {});
  }
};
