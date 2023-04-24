'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
     "test",
     [
       {
         doctorDss: 8703285637,
         firstName: "Debbie",
         lastName: "Gardner",
         testDate: 4/24/2023,
         testTime: 4/24/2023,
         
       },
     ],
     {}
   );
 
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
