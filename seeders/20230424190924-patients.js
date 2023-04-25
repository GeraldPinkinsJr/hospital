'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert(  "patients",
     [
       {
         ss: 3208140624,
         firstName: "Debbie",
         lastName: "Gardner",
         insurance: "Blue Cross Blue Shield",
         dateAdmitted: 4/24/2023,
         dateCheckOut: 4/24/2023,
       },
     ]),
     {}
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
