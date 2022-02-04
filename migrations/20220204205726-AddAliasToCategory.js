'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('Categories', 'alias',
      {
        type: Sequelize.STRING,
        after: 'name',
        allowNull: true,
      }),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Categories', 'alias'),
    ]);
  }
};
